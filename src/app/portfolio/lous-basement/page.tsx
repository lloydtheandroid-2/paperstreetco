import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function LousBasementPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Lou's Basement</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Portfolio Item 1" className="rounded-t-lg" data-ai-hint="underground bar" />
          </CardHeader>
          <CardContent className="pt-4">
            <CardTitle>The Bar</CardTitle>
            <p className="text-muted-foreground mt-2">Where great ideas are born and plans are made.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Portfolio Item 2" className="rounded-t-lg" data-ai-hint="chemistry set" />
          </CardHeader>
          <CardContent className="pt-4">
            <CardTitle>The Lab</CardTitle>
            <p className="text-muted-foreground mt-2">Experimentation and innovation in a discreet location.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Portfolio Item 3" className="rounded-t-lg" data-ai-hint="boxing gloves" />
          </CardHeader>
          <CardContent className="pt-4">
            <CardTitle>The Ring</CardTitle>
            <p className="text-muted-foreground mt-2">Settling differences and building character.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
