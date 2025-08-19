import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const NavMenu = () => (
  <>
    <Link href="/portfolio/project-mayhem" passHref>
      <Button variant="ghost">Project Mayhem</Button>
    </Link>
    <Link href="/portfolio/space-monkeys" passHref>
      <Button variant="ghost">Space Monkeys</Button>
    </Link>
    <Link href="/portfolio/lous-basement" passHref>
      <Button variant="ghost">Lou's Basement</Button>
    </Link>
    <Link href="/blog" passHref>
      <Button variant="ghost">Blog</Button>
    </Link>
  </>
);

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/assets/logo.png" alt="Company Logo" width={48} height={48} />
        <span className="font-bold text-lg">Paper Street Co.</span>
      </Link>
      
      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-4">
        <NavMenu />
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 py-8">
              <NavMenu />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
