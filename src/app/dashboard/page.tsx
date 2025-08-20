
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bomb, Rocket, Wrench } from "lucide-react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Welcome Back</h1>
        <p className="text-muted-foreground">This is your space. Your sandboxes are below.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Bomb /> Project Mayhem</CardTitle>
            <CardDescription>Your space for radical ideas.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/portfolio/project-mayhem" passHref>
              <Button variant="secondary" className="w-full">Enter Sandbox</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Rocket /> Space Monkeys</CardTitle>
            <CardDescription>Your launchpad for ambitious projects.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/portfolio/space-monkeys" passHref>
              <Button variant="secondary" className="w-full">Enter Sandbox</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Wrench /> Lou's Basement</CardTitle>
            <CardDescription>Where the real work happens.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/portfolio/lous-basement" passHref>
              <Button variant="secondary" className="w-full">Enter Sandbox</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
