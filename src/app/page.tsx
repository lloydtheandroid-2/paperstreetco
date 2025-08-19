import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SoapIcon } from '@/components/icons/soap-icon';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-background">
      <header className="flex flex-col items-center text-center mb-12 animate-in fade-in duration-1000">
        <SoapIcon className="h-24 w-24 mb-4" />
        <h1 className="text-5xl font-bold font-headline text-foreground mb-2">
          Paper Street Soapbox
        </h1>
        <p className="text-xl text-muted-foreground">
          The first rule of Soapbox is: you DO talk about Soapbox.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
        <Card className="bg-card/50 hover:bg-card/100 hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-accent-foreground">Android</CardTitle>
            <CardDescription>A space for projects that are beautifully human.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/sandbox/android" passHref>
              <Button className="w-full">Enter Sandbox</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-card/50 hover:bg-card/100 hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-accent-foreground">Ground Control</CardTitle>
            <CardDescription>For missions that are out of this world.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/sandbox/ground-control" passHref>
              <Button className="w-full">Enter Sandbox</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-card/50 hover:bg-card/100 hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-accent-foreground">Double D</CardTitle>
            <CardDescription>For creations that are bold and beautiful.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/sandbox/double-d" passHref>
              <Button className="w-full">Enter Sandbox</Button>
            </Link>
          </CardContent>
        </Card>
      </main>
      <footer className="text-center mt-12 text-muted-foreground text-sm">
        <p>A project by some guys you've never heard of.</p>
      </footer>
    </div>
  );
}
