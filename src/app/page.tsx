
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bomb, GitMerge, Users, School } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-background">
      <header className="flex flex-col items-center text-center mb-12 animate-in fade-in duration-1000">
        <Image
          src="/assets/logo.png"
          alt="Company Logo"
          width={192}
          height={192}
          className="mb-4"
        />
        <h1 className="text-5xl font-bold font-headline text-foreground mb-2">
          Paper Street Co.
        </h1>
        <p className="text-2xl text-muted-foreground">The Soapbox</p>
        <p className="text-xl text-muted-foreground mt-2">
          The first rule of Soapbox is: you DO talk about Soapbox.
        </p>
      </header>

      <main className="flex flex-col items-center w-full max-w-6xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
        <div className="w-full md:w-1/3">
           <Card className="bg-card/20 backdrop-blur-sm border-white/10 hover:bg-card/50 hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent"><Bomb />Project Mayhem</CardTitle>
              <CardDescription>somebody spoke, didn't they?</CardDescription>
            </CardHeader>
            <CardContent>
                <Link href="/learn" passHref>
                  <Button className="w-full">Start Making Soap</Button>
                </Link>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="text-center mt-12 text-muted-foreground text-sm">
        <p>A project by some guys you've never heard of.</p>
      </footer>
    </div>
  );
}
