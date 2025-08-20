
import Image from 'next/image';
import StartButton from '@/components/auth/start-button';
import MemberCount from '@/components/shared/member-count';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl w-full">
          {/* Left Column: Text Content & CTA */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Visual Element (Mobile) */}
            <div className="md:hidden mb-8">
               <Image
                src="/assets/logo.png"
                alt="The Soapbox Logo"
                width={200}
                height={200}
                className="rounded-lg shadow-2xl"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold font-headline text-foreground">
              The Soapbox
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mt-4 mb-4">
              The first rule of Soapbox is: you DO talk about Soapbox.
            </p>
            <div className="mb-8">
              <MemberCount />
            </div>
            <StartButton />
          </div>

          {/* Right Column: Visual Element (Desktop) */}
          <div className="hidden md:flex justify-center items-center animate-in fade-in slide-in-from-right-8 duration-1000">
            <Image
              src="/assets/logo.png"
              alt="The Soapbox Logo"
              width={400}
              height={400}
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
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
