'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { roadmapItems } from '@/lib/roadmap-data';
import { Code, Eye } from 'lucide-react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { ScrollArea } from '@/components/ui/scroll-area';

// A simple "preview" component that uses an iframe to render user HTML
function CodePreview({ code }: { code: string }) {
  const [iframeBody, setIframeBody] = React.useState('');

  React.useEffect(() => {
    // A simple debounce to avoid re-rendering the iframe on every keystroke
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
  // For now, we'll just show the first lesson.
  const [lesson, setLesson] = React.useState(roadmapItems[0]);
  const [userCode, setUserCode] = React.useState(lesson.sampleCode || '');

  return (
    <div className="h-[calc(100vh-theme(spacing.16))]">
       <ResizablePanelGroup direction="horizontal" className="w-full h-full">
        <ResizablePanel defaultSize={50}>
            <ScrollArea className="h-full p-4 md:p-8">
                <div className="max-w-3xl mx-auto">
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
                            Here's a starting point. You can edit this in the editor below.
                        </CardDescription>
                        </CardHeader>
                        <CardContent>
                        <div className="bg-muted p-4 rounded-md text-sm text-muted-foreground">
                            <pre><code>{lesson.sampleCode}</code></pre>
                        </div>
                        </CardContent>
                    </Card>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">Your Turn</h2>
                        <Textarea
                            value={userCode}
                            onChange={(e) => setUserCode(e.target.value)}
                            placeholder="Write your code here..."
                            className="min-h-[200px] bg-card text-card-foreground font-mono"
                        />
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
