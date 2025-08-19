import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function ProjectMayhemPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Project Mayhem</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Portfolio Item 1" className="rounded-t-lg" data-ai-hint="city destruction" />
          </CardHeader>
          <CardContent className="pt-4">
            <CardTitle>Urban Renewal</CardTitle>
            <p className="text-muted-foreground mt-2">A bold statement on modern architecture and consumerism.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Portfolio Item 2" className="rounded-t-lg" data-ai-hint="soap art" />
          </CardHeader>
          <CardContent className="pt-4">
            <CardTitle>Artisanal Creations</CardTitle>
            <p className="text-muted-foreground mt-2">Handcrafted items with a purpose. Very exclusive.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Portfolio Item 3" className="rounded-t-lg" data-ai-hint="underground movement" />
          </CardHeader>
          <CardContent className="pt-4">
            <CardTitle>Grassroots Movement</CardTitle>
            <p className="text-muted-foreground mt-2">A study in social dynamics and organization.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
