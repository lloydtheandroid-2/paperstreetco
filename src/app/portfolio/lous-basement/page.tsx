
'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Share2, Sparkles, Loader } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import React from 'react';
import { generateCode } from '@/ai/flows/generate-code-flow';

export default function SandboxPage() {
  const { toast } = useToast();
  const sandboxName = "Lou's Basement";

  const [editorContent, setEditorContent] = React.useState('');
  const [previewContent, setPreviewContent] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href).then(() => {
        toast({
          title: "Link Copied!",
          description: "Sandbox URL has been copied to your clipboard.",
        });
      }).catch(err => {
        console.error('Failed to copy: ', err);
        toast({
          title: "Error",
          description: "Could not copy link to clipboard.",
          variant: "destructive",
        });
      });
    }
  };
  
  const handleGenerate = async () => {
    if (!editorContent) {
      toast({
        title: "Editor is empty",
        description: "Please describe the app you want to build.",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    setPreviewContent('');
    try {
      const generatedHtml = await generateCode(editorContent);
      setPreviewContent(generatedHtml);
    } catch (error) {
      console.error('Failed to generate code: ', error);
      toast({
        title: "Generation Failed",
        description: "The AI failed to generate code. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-81px)] p-4 md:p-6 lg:p-8">
      <header className="flex items-center justify-between mb-6 animate-in fade-in duration-500">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl md:text-3xl font-bold font-headline">
            {sandboxName} Sandbox
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleShare}>
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button onClick={handleGenerate} disabled={isLoading}>
            {isLoading ? (
              <Loader className="animate-spin mr-2"/>
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            Generate
          </Button>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
        <Card className="flex flex-col border-dashed border-2">
          <CardHeader>
            <CardTitle>Editor</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col p-2 pt-0">
            <Textarea
              placeholder="Describe what you want to build. For example: a simple pong game with a black background."
              className="flex-1 w-full h-full resize-none bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              aria-label="Code Editor"
              value={editorContent}
              onChange={(e) => setEditorContent(e.target.value)}
              disabled={isLoading}
            />
          </CardContent>
        </Card>
        <Card className="flex flex-col border-dashed border-2">
          <CardHeader>
            <CardTitle>Preview</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            {isLoading && (
              <div className="w-full h-full flex items-center justify-center bg-transparent rounded-md">
                <div className="text-center">
                  <Loader className="h-8 w-8 animate-spin mx-auto mb-2" />
                  <p className="text-muted-foreground">The AI is building... this may take a moment.</p>
                </div>
              </div>
            )}
            {!isLoading && !previewContent && (
              <div className="w-full h-full flex items-center justify-center bg-transparent rounded-md">
                <p className="text-muted-foreground">Your app preview will appear here.</p>
              </div>
            )}
            {previewContent && (
               <iframe
                srcDoc={previewContent}
                title="Preview"
                sandbox="allow-scripts"
                className="w-full h-full border-0"
              />
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
