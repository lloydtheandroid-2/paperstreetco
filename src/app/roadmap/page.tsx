'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Code, Database, BrainCircuit, Cloud, Milestone, ShieldCheck, Gem } from "lucide-react";
import { getTrainingResources } from '@/ai/flows/get-training-resources-flow';
import type { TrainingResource } from '@/ai/flows/schemas/training-resources-schema';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const roadmapItems = [
  {
    title: "Rule #1: You DO Talk About Soapbox",
    subtitle: "The Foundation",
    description: "First, you have to talk about it. Spread the word. You start with the fundamentals. Structure with HTML, style with CSS, and bring it to life with JavaScript. We use modern tools like React and Next.js, styled with Tailwind and ShadCN, because the things you own, end up owning you.",
    icon: <Code className="w-8 h-8 text-accent" />,
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "ShadCN UI"],
  },
  {
    title: "Rule #2: If It's Your First Night, You HAVE to Code",
    subtitle: "Build the Machine",
    description: "A front-end is just a mask. To have real impact, you need a brain behind it. We connect our apps to full-stack backends and persistent data stores. We also explore immersive 3D experiences with Three.js. This is where your project develops a memory and a new dimension.",
    icon: <Database className="w-8 h-8 text-accent" />,
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "Three.js"],
  },
  {
    title: "Rule #3: Achieve Self-Awareness",
    subtitle: "Artificial Intelligence",
    description: "It's only after we've lost everything that we're free to do anything. We give the machine a mind of its own, exploring AI models, agentic systems, and giving it a voice with Genkit.",
    icon: <BrainCircuit className="w-8 h-8 text-accent" />,
    technologies: ["Genkit", "LLMs", "Agents", "Prompt Engineering"],
  },
   {
    title: "Rule #4: Prepare for Mayhem",
    subtitle: "Security & Hardening",
    description: "You have to know the rules to break them. Before we can unleash our creations, we must understand how to protect them. This is about securing endpoints, managing user data responsibly, and building resilient systems.",
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    technologies: ["Authentication", "Authorization", "Input Validation", "Firebase App Check", "Security Rules"],
  },
  {
    title: "Rule #5: Let Go of the Wheel",
    subtitle: "Cloud & Containerization",
    description: "This is your life and it's ending one minute at a time. We package our projects for a global scale, deploying them using modern cloud infrastructure. Your creation is no longer yours; it belongs to the world.",
    icon: <Cloud className="w-8 h-8 text-accent" />,
    technologies: ["Docker", "Kubernetes", "Firebase Hosting", "Cloud Functions"],
  },
];

function TrainingResourcesDialog({ technologies, children, title }: { technologies: string[], children: React.ReactNode, title: string }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [resources, setResources] = React.useState<TrainingResource[]>([]);

  const handleOpenChange = async (open: boolean) => {
    setIsOpen(open);
    if (open && resources.length === 0) {
      setIsLoading(true);
      const fetchedResources = await getTrainingResources(technologies);
      setResources(fetchedResources);
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Recommended Resources for {title}</DialogTitle>
        </DialogHeader>
        <div className="max-h-[60vh] overflow-y-auto pr-4">
          {isLoading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-5 w-1/3" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : resources.length > 0 ? (
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <Card key={index} className="bg-card/50">
                  <CardHeader>
                    <CardTitle className="text-lg">{resource.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{resource.description}</p>
                    <Button asChild>
                      <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                        Learn More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
             <div className="text-center p-8">
                <p className="text-muted-foreground">No resources found at this time. Please try again later.</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}


export default function RoadmapPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-2">Project Roadmap</h1>
        <p className="text-muted-foreground text-lg">A sequential path to enlightenment and controlled chaos. Click any step to get learning resources.</p>
      </div>
      
      <div className="relative pl-4">
        {/* The vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-0.5 bg-border hidden md:block"></div>

        <div className="space-y-16">
          {roadmapItems.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 relative">
              
              {/* Card Left or Right */}
              <div className={`md:col-start-1 ${index % 2 !== 0 ? 'md:col-start-3' : ''} ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                 <TrainingResourcesDialog technologies={item.technologies} title={item.subtitle}>
                   <Card className="cursor-pointer hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader>
                      <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="flex-shrink-0">{item.icon}</div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.title}</p>
                          <CardTitle>{item.subtitle}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{item.description}</p>
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        {item.technologies.map(tech => (
                          <div key={tech} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">{tech}</div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                 </TrainingResourcesDialog>
              </div>

              {/* Milestone Icon */}
              <div className="absolute md:relative left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 md:col-start-2 h-full">
                <div className="hidden md:flex items-center h-full">
                   <div className="bg-background p-2 rounded-full border">
                      <Milestone className="w-6 h-6 text-primary" />
                   </div>
                </div>
              </div>

               {/* Empty placeholder for grid layout */}
              <div className="hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
