
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";

export default function SpaceMonkeysPage() {
  return (
    <div className="flex flex-col items-center p-8">
      <Card className="w-full max-w-4xl">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold text-primary">Space Monkeys</CardTitle>
          <CardDescription className="text-lg">A space for Ground Control.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Image 
            src="https://placehold.co/600x400.png" 
            alt="Space Monkeys" 
            width={600} 
            height={400}
            data-ai-hint="space exploration"
            className="rounded-lg mb-4"
            />
          <p className="text-center text-muted-foreground">
            A launchpad for ambitious projects. We are the all-singing, all-dancing crap of the world.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
