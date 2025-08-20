
import Header from '@/components/shared/header';
import { Suspense } from 'react';

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div>Loading...</div>}>
         {children}
        </Suspense>
      </main>
    </div>
  );
}
