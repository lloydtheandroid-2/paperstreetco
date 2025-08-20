import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <Card className="bg-card/50 hover:bg-card/100 hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">Project Mayhem</CardTitle>
              <CardDescription>A space for the Rogue Android</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/portfolio/project-mayhem" passHref>
                <Button className="w-full">Enter this Soapbox</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card/50 hover:bg-card/100 hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">Space Monkeys</CardTitle>
              <CardDescription>A space for Ground Control</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/portfolio/space-monkeys" passHref>
                <Button className="w-full">Enter this Soapbox</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card/50 hover:bg-card/100 hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">Lou's Basement</CardTitle>
              <CardDescription>A space for Double D</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/portfolio/lous-basement" passHref>
                <Button className="w-full">Enter this Soapbox</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3">
           <Card className="bg-card/50 hover:bg-card/100 hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">Support Groups</CardTitle>
              <CardDescription>A place to let it all out.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/blog" passHref>
                <Button className="w-full">Enter this Soapbox</Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="bg-card/50 hover:bg-card/100 hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">Project Roadmap</CardTitle>
              <CardDescription>Let go of the wheel.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/roadmap" passHref>
                <Button className="w-full">View the Path</Button>
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
