
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";

export default function ProjectMayhemPage() {
  return (
    <div className="flex flex-col items-center p-8">
      <Card className="w-full max-w-4xl">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold text-primary">Project Mayhem</CardTitle>
          <CardDescription className="text-lg">A space for the Rogue Android.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Image 
            src="https://placehold.co/600x400.png" 
            alt="Project Mayhem" 
            width={600} 
            height={400}
            data-ai-hint="chaos destruction"
            className="rounded-lg mb-4"
            />
          <p className="text-center text-muted-foreground">
            This is the sandbox for radical ideas and disruptive creations. Break the rules. Challenge the system.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
