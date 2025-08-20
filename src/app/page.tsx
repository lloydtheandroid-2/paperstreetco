
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl w-full">
          {/* Left Column: Text Content & CTA */}
          <div className="flex flex-col items-start text-left animate-in fade-in slide-in-from-left-8 duration-1000">
            <Image
              src="/assets/logo.png"
              alt="Company Logo"
              width={128}
              height={128}
              className="mb-6"
            />
            <h1 className="text-5xl md:text-6xl font-bold font-headline text-foreground mb-4">
              Paper Street Soapbox
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              The first rule of Soapbox is: you DO talk about Soapbox. Your journey into creation starts now.
            </p>
            <Link href="/learn" passHref>
              <Button size="lg" className="text-lg py-7 px-8">
                Start Making Soap
              </Button>
            </Link>
          </div>

          {/* Right Column: Visual Element */}
          <div className="hidden md:flex justify-center items-center animate-in fade-in slide-in-from-right-8 duration-1000">
            <Image
              src="https://placehold.co/600x800.png"
              alt="Soap making process"
              width={500}
              height={700}
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              data-ai-hint="artisan soap"
            />
          </div>
        </div>
      </main>

      <footer className="text-center p-4 text-muted-foreground text-sm">
        <p>A project by some guys you've never heard of.</p>
      </footer>
    </div>
  );
}
