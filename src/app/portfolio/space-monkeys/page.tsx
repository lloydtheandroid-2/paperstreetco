import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function SpaceMonkeysPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Space Monkeys</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Portfolio Item 1" className="rounded-t-lg" data-ai-hint="space night" />
          </CardHeader>
          <CardContent className="pt-4">
            <CardTitle>Celestial Navigation</CardTitle>
            <p className="text-muted-foreground mt-2">Charting courses through the final frontier.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Portfolio Item 2" className="rounded-t-lg" data-ai-hint="rocket launch" />
          </CardHeader>
          <CardContent className="pt-4">
            <CardTitle>Launch Systems</CardTitle>
            <p className="text-muted-foreground mt-2">Advanced propulsion for a new era of exploration.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Portfolio Item 3" className="rounded-t-lg" data-ai-hint="mission control" />
          </CardHeader>
          <CardContent className="pt-4">
            <CardTitle>Ground Control</CardTitle>
            <p className="text-muted-foreground mt-2">The nerve center of our most ambitious projects.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
