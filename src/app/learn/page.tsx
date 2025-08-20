
'use client';

import * as React from 'react';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { roadmapItems } from '@/lib/roadmap-data';
import { Code, Eye, ChevronLeft, ChevronRight, Check, FileCode2 } from 'lucide-react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useProgressStore } from '@/hooks/use-progress-store';
import { useToast } from '@/hooks/use-toast';
import { useRouter, useSearchParams } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { useIsMobile } from '@/hooks/use-mobile';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EmptyState from '@/components/shared/empty-state';

// A simple "preview" component that uses an iframe to render user HTML/JS
function CodePreview({ code, language }: { code: string, language: string }) {
  const [iframeBody, setIframeBody] = React.useState('');

  React.useEffect(() => {
    // Only attempt to render if the language is JavaScript, which can be run in the browser
    const timeoutId = setTimeout(() => {
        setIframeBody(code);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [code, language]);

  const srcDoc = `
    <html>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          body { 
            background-color: #0c0a09; 
            color: #fafaf9;
            font-family: sans-serif;
            padding: 1rem;
          }
        </style>
      </head>
      <body>
        <script>
          // Allow for both direct HTML and JS that writes to the document
          try {
            const originalCode = \`${iframeBody.replace(/`/g, '\\`')}\`;
            // If the code is likely HTML, just write it.
            if (originalCode.trim().startsWith('<')) {
              document.body.innerHTML += originalCode;
            } else {
              // Otherwise, execute it as JS.
              eval(originalCode);
            }
          } catch (e) {
            document.body.innerHTML = '<pre style="color: #f87171;">' + e + '</pre>';
          }
        </script>
        ${language.toLowerCase() !== 'javascript' ? `<div style="text-align: center; padding-top: 2rem; font-style: italic; color: #a1a1aa;">Live preview is only available for JavaScript/HTML.</div>` : ''}
      </body>
    </html>
  `;
  
  return (
    <div className="w-full h-full bg-stone-950">
      <iframe
        title="Code Preview"
        srcDoc={srcDoc}
        className="w-full h-full border-none"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
}

function LearnViewContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const { completedLessons, setCompletedLessons } = useProgressStore();
  const isMobile = useIsMobile();

  const getInitialLessonIndex = React.useCallback(() => {
    const lessonParam = searchParams.get('lesson');
    if (lessonParam) {
      const lessonNum = parseInt(lessonParam, 10);
      if (!isNaN(lessonNum) && lessonNum >= 0 && lessonNum < roadmapItems.length) {
        return lessonNum;
      }
    }
    return completedLessons.length < roadmapItems.length ? completedLessons.length : 0;
  }, [searchParams, completedLessons.length]);

  const [currentLessonIndex, setCurrentLessonIndex] = React.useState(getInitialLessonIndex);
  const lesson = roadmapItems[currentLessonIndex];
  const availableLanguages = lesson ? Object.keys(lesson.sampleCode) : [];
  const [selectedLanguage, setSelectedLanguage] = React.useState(availableLanguages[0]);

  const [userCode, setUserCode] = React.useState(lesson ? lesson.sampleCode[selectedLanguage] || '' : '');
  
  const isCompleted = completedLessons.includes(currentLessonIndex);

  React.useEffect(() => {
    const lessonIndex = getInitialLessonIndex();
    setCurrentLessonIndex(lessonIndex);
    const newLesson = roadmapItems[lessonIndex];
    if (newLesson) {
      const languages = Object.keys(newLesson.sampleCode);
      const currentLang = languages.includes(selectedLanguage) ? selectedLanguage : languages[0];
      if (!languages.includes(selectedLanguage)) {
        setSelectedLanguage(currentLang);
      }
      setUserCode(newLesson.sampleCode[currentLang] || '');
      // Update URL without navigating
      const newUrl = `${window.location.pathname}?lesson=${lessonIndex}`;
      window.history.replaceState({ path: newUrl }, '', newUrl);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, getInitialLessonIndex]);

  React.useEffect(() => {
    if (lesson) {
      setUserCode(lesson.sampleCode[selectedLanguage] || '');
    }
  }, [selectedLanguage, lesson]);


  if (!lesson) {
    return <LearnPageLoading />;
  }

  const handleNext = () => {
    if (currentLessonIndex < roadmapItems.length - 1) {
      const nextIndex = currentLessonIndex + 1;
      router.push(`/learn?lesson=${nextIndex}`);
    }
  };

  const handlePrev = () => {
    if (currentLessonIndex > 0) {
      const prevIndex = currentLessonIndex - 1;
      router.push(`/learn?lesson=${prevIndex}`);
    }
  };

  const handleComplete = () => {
    if (!isCompleted) {
        setCompletedLessons([...new Set([...completedLessons, currentLessonIndex])].sort((a,b) => a-b));
        toast({
            title: "Rule Mastered!",
            description: `You've completed: "${lesson.subtitle}"`,
        });
    }

    if (currentLessonIndex === roadmapItems.length - 1) {
        toast({
            title: "Roadmap Complete!",
            description: "You've mastered all the rules. It's time to build.",
        });
        router.push('/dashboard');
    } else {
        handleNext();
    }
  };

  const mainContent = (
    <ScrollArea className="h-full">
        <div className="p-4 md:p-8">
            <div className="mb-8">
                <p className="text-sm text-primary font-semibold mb-1">{lesson.title}</p>
                <h1 className="text-4xl font-bold">{lesson.subtitle}</h1>
                <p className="text-muted-foreground mt-2">{lesson.description}</p>
            </div>
            
            <Tabs value={selectedLanguage} onValueChange={setSelectedLanguage} className="mb-4">
                <TabsList>
                  {availableLanguages.map(lang => (
                     <TabsTrigger key={lang} value={lang}>{lang}</TabsTrigger>
                  ))}
                </TabsList>
            </Tabs>

            <Card className="mb-8">
                <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Code className="w-6 h-6" />
                    <span>Example Code</span>
                </CardTitle>
                <CardDescription>
                    This is your starting point. Modify it in the editor below to experiment.
                </CardDescription>
                </CardHeader>
                <CardContent>
                <div className="bg-muted p-4 rounded-md text-sm text-muted-foreground">
                    <pre><code>{lesson.sampleCode[selectedLanguage]}</code></pre>
                </div>
                </CardContent>
            </Card>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Your Editor</h2>
                <Textarea
                    value={userCode}
                    onChange={(e) => setUserCode(e.target.value)}
                    placeholder="Write your code here..."
                    className="min-h-[200px] bg-card text-card-foreground font-mono"
                />
            </div>

             <div className="flex items-center justify-between">
                <Button variant="outline" onClick={handlePrev} disabled={currentLessonIndex === 0}>
                    <ChevronLeft />
                    Previous
                </Button>
                <div className="text-sm text-muted-foreground">
                    Rule {currentLessonIndex + 1} of {roadmapItems.length}
                </div>
                <div className="flex items-center gap-2">
                  <Button onClick={handleComplete} variant={isCompleted ? "secondary" : "default"}>
                      {isCompleted ? 'Completed' : 'Mark as Complete'}
                      <Check className={`ml-2 ${isCompleted ? 'opacity-100' : 'opacity-50'}`} />
                  </Button>
                   {currentLessonIndex < roadmapItems.length - 1 && (
                    <Button onClick={handleNext} variant="outline">
                        Next
                        <ChevronRight />
                    </Button>
                   )}
                </div>
            </div>
        </div>
    </ScrollArea>
  );

  return (
    <div className="h-[calc(100vh-theme(spacing.16))]">
      {lesson.hidePreview ? (
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            <div className="col-span-1 h-full">{mainContent}</div>
            <div className="hidden md:flex col-span-1 h-full bg-muted items-center justify-center p-8">
                <EmptyState
                    icon={FileCode2}
                    title="No Preview Available"
                    description="This lesson focuses on concepts or code that runs in a terminal, not in a browser. Focus on understanding the example and experimenting in the editor."
                />
            </div>
        </div>
      ) : (
       <ResizablePanelGroup direction={isMobile ? "vertical" : "horizontal"} className="w-full h-full">
          <ResizablePanel defaultSize={50}>
            {mainContent}
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-2 p-4 border-b bg-card">
                  <Eye className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-bold">Preview</h2>
              </div>
              <div className="flex-1">
                  <CodePreview code={userCode} language={selectedLanguage} />
              </div>
            </div>
          </ResizablePanel>
       </ResizablePanelGroup>
      )}
    </div>
  );
}


function LearnView() {
  return (
    <Suspense fallback={<LearnPageLoading />}>
      <LearnViewContent />
    </Suspense>
  )
}

function LearnPageLoading() {
  return (
    <div className="h-[calc(100vh-theme(spacing.16))] p-4 md:p-8">
      <div className="mb-8">
        <Skeleton className="h-5 w-1/4 mb-2" />
        <Skeleton className="h-10 w-1/2 mb-3" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <Skeleton className="w-full h-48 mb-8" />
      <Skeleton className="w-full h-56" />
    </div>
  )
}

function LearnPage() {
  return <LearnView />;
}

export default LearnPage;
