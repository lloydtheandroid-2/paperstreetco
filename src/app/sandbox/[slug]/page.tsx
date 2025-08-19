'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import React from 'react';

function toTitleCase(str: string) {
  if (!str) return '';
  return str.replace(/-/g, ' ').replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
  );
}

export default function SandboxPage() {
  const params = useParams();
  const { toast } = useToast();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const sandboxName = toTitleCase(slug);

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

  return (
    <div className="flex flex-col h-screen p-4 md:p-6 lg:p-8">
      <header className="flex items-center justify-between mb-6 animate-in fade-in duration-500">
        <div className="flex items-center gap-4">
          <Link href="/" passHref>
            <Button variant="outline" size="icon" aria-label="Go back to homepage">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold font-headline">
            {sandboxName} Sandbox
          </h1>
        </div>
        <Button variant="outline" onClick={handleShare}>
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
        <Card className="flex flex-col border-dashed border-2">
          <CardHeader>
            <CardTitle>Editor</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col p-2 pt-0">
            <Textarea
              placeholder="// Let's make some soap."
              className="flex-1 w-full h-full resize-none bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              aria-label="Code Editor"
            />
          </CardContent>
        </Card>
        <Card className="flex flex-col border-dashed border-2">
          <CardHeader>
            <CardTitle>Preview</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="w-full h-full flex items-center justify-center bg-transparent rounded-md">
              <p className="text-muted-foreground">Your app preview will appear here.</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
