
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { roadmapItems } from '@/lib/roadmap-data';
import { Code, Eye, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useProgressStore } from '../dashboard/page';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

// A simple "preview" component that uses an iframe to render user HTML
function CodePreview({ code }: { code: string }) {
  const [iframeBody, setIframeBody] = React.useState('');

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIframeBody(code);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [code]);

  return (
    <div className="w-full h-full bg-white">
      <iframe
        title="Code Preview"
        srcDoc={`<html><head><script src="https://cdn.tailwindcss.com"></script></head><body class="p-4">${iframeBody}</body></html>`}
        className="w-full h-full border-none"
        sandbox="allow-scripts"
      />
    </div>
  );
}

export default function LearnPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [completedLessons, setCompletedLessons] = useProgressStore();

  // Start at the lesson after the last completed one
  const [currentLessonIndex, setCurrentLessonIndex] = React.useState(completedLessons.length);
  const lesson = roadmapItems[currentLessonIndex];
  const [userCode, setUserCode] = React.useState(lesson.sampleCode || '');

  const isCompleted = completedLessons.includes(currentLessonIndex);

  React.useEffect(() => {
    setUserCode(roadmapItems[currentLessonIndex].sampleCode || '');
  }, [currentLessonIndex]);

  const handleNext = () => {
    if (currentLessonIndex < roadmapItems.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    }
  };

  const handleComplete = () => {
    if (!isCompleted) {
        setCompletedLessons(prev => [...new Set([...prev, currentLessonIndex])].sort((a,b) => a-b));
        toast({
            title: "Rule Mastered!",
            description: `You've completed: "${lesson.subtitle}"`,
        });
    }

    if (currentLessonIndex === roadmapItems.length - 1) {
        // Last lesson completed
        toast({
            title: "Roadmap Complete!",
            description: "You've mastered all the rules. It's time to build.",
        });
        router.push('/dashboard');
    } else {
        handleNext();
    }
  };

  return (
    <div className="h-[calc(100vh-theme(spacing.16))]">
       <ResizablePanelGroup direction="horizontal" className="w-full h-full">
        <ResizablePanel defaultSize={50}>
            <ScrollArea className="h-full">
                <div className="p-4 md:p-8">
                    <div className="mb-8">
                        <p className="text-sm text-primary font-semibold mb-1">{lesson.title}</p>
                        <h1 className="text-4xl font-bold">{lesson.subtitle}</h1>
                        <p className="text-muted-foreground mt-2">{lesson.description}</p>
                    </div>

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
                            <pre><code>{lesson.sampleCode}</code></pre>
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
                        <Button onClick={handleComplete}>
                            {isCompleted ? 'Completed' : 'Mark as Complete'}
                            <Check className={`ml-2 ${isCompleted ? 'opacity-100' : 'opacity-50'}`} />
                        </Button>
                    </div>
                </div>
            </ScrollArea>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
           <div className="flex flex-col h-full">
             <div className="flex items-center gap-2 p-4 border-b bg-card">
                <Eye className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-bold">Preview</h2>
             </div>
             <div className="flex-1">
                <CodePreview code={userCode} />
             </div>
           </div>
        </ResizablePanel>
       </ResizablePanelGroup>
    </div>
  );
}
