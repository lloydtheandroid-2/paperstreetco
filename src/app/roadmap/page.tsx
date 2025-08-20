import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, BrainCircuit, Cloud, Milestone } from "lucide-react";

export default function RoadmapPage() {
  const roadmapItems = [
    {
      title: "Phase 1: The Foundation",
      subtitle: "Basic Front-End",
      description: "Mastering the core building blocks. HTML for structure, CSS for style, and JavaScript for interaction. This is where every member starts.",
      icon: <Code className="w-8 h-8 text-accent" />,
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)"],
    },
    {
      title: "Phase 2: Building the Machine",
      subtitle: "Full-Stack & Databases",
      description: "Connecting the front-end to a brain. We'll build full-stack applications with persistent data using Node.js and a database like MongoDB.",
      icon: <Database className="w-8 h-8 text-accent" />,
      technologies: ["Node.js", "Express", "MongoDB", "React"],
    },
    {
      title: "Phase 3: Achieving Awareness",
      subtitle: "Artificial Intelligence",
      description: "Giving the machine a mind of its own. Exploring AI concepts, from basic models and agents to more complex systems.",
      icon: <BrainCircuit className="w-8 h-8 text-accent" />,
      technologies: ["Genkit", "LLMs", "Agent-based Systems"],
    },
    {
      title: "Phase 4: Unleashing Mayhem",
      subtitle: "Cloud & Containerization",
      description: "Preparing our projects for global scale. Understanding how to package and deploy applications using modern cloud infrastructure.",
      icon: <Cloud className="w-8 h-8 text-accent" />,
      technologies: ["Docker", "Kubernetes", "Firebase Hosting", "Cloud Functions"],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-2">Project Roadmap</h1>
        <p className="text-muted-foreground text-lg">A sequential path to enlightenment and controlled chaos.</p>
      </div>
      
      <div className="relative">
        {/* The vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-0.5 bg-border hidden md:block"></div>

        <div className="space-y-16">
          {roadmapItems.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center justify-center relative">
              <div className="md:w-5/12">
                <Card className={`text-center md:text-left ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <CardHeader>
                    <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                      <div className="flex-shrink-0">{item.icon}</div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.title}</p>
                        <CardTitle>{item.subtitle}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">{item.description}</p>
                    <div className={`flex gap-2 justify-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      {item.technologies.map(tech => (
                        <div key={tech} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">{tech}</div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* The milestone icon on the line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:block">
                 <div className="bg-background p-2 rounded-full border">
                    <Milestone className="w-6 h-6 text-primary" />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
