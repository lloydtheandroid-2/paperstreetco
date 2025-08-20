
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import UserNav from '@/components/auth/user-nav';
import { useAuth } from '@/components/auth/auth-provider';
import MemberCount from './member-count';

const NavMenu = () => {
  const { user } = useAuth();
  
  return (
  <>
    {user && (
       <Link href="/dashboard" passHref>
        <Button variant="ghost">Dashboard</Button>
      </Link>
    )}
    <Link href="/blog" passHref>
      <Button variant="ghost">Support Group</Button>
    </Link>
    <Link href="/roadmap" passHref>
      <Button variant="ghost">Roadmap</Button>
    </Link>
  </>
)};

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/logo.png" alt="Company Logo" width={80} height={80} className="w-12 h-auto md:w-24" />
          <span className="font-bold text-lg hidden sm:inline-block">The Soapbox</span>
        </Link>
        <div className="hidden md:block">
         <MemberCount />
        </div>
      </div>
      
      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-2">
        <NavMenu />
        <UserNav />
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
              <UserNav />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
