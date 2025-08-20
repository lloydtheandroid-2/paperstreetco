
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";

export default function LousBasementPage() {
  return (
    <div className="flex flex-col items-center p-8">
      <Card className="w-full max-w-4xl">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold text-primary">Lou's Basement</CardTitle>
          <CardDescription className="text-lg">A space for Double D.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Image 
            src="https://placehold.co/600x400.png" 
            alt="Lou's Basement" 
            width={600} 
            height={400}
            data-ai-hint="underground club"
            className="rounded-lg mb-4"
            />
          <p className="text-center text-muted-foreground">
            Where the real work happens. This is where we build, test, and refine. No distractions.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
