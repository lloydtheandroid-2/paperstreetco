'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Code, Database, BrainCircuit, Cloud, Milestone, ShieldCheck, Shirt, Users, Goal, Repeat } from "lucide-react";
import { getTrainingResources } from '@/ai/flows/get-training-resources-flow';
import type { TrainingResource } from '@/ai/flows/schemas/training-resources-schema';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const roadmapItems = [
  {
    title: "Rule #1 & #2: You Do Not Talk About It",
    subtitle: "The Foundation",
    description: "The first rule of mastery is focus. The second rule is focus. Before you can change the world, you must quietly build your skills. This is the foundation: structure, style, and interaction. Let your work speak for you.",
    icon: <Code className="w-8 h-8 text-accent" />,
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Rule #3: If Someone Taps, the Fight is Over",
    subtitle: "Graceful Exits & Error Handling",
    description: "Your code will face errors. It will be pushed to its limits. A robust system knows when to tap out. This is about building resilient applications with proper error handling, state management, and user feedback.",
    icon: <Goal className="w-8 h-8 text-accent" />,
    technologies: ["State Management", "Error Boundaries", "Logging", "User Feedback"],
  },
  {
    title: "Rule #4: Only Two to a Fight",
    subtitle: "Client & Server",
    description: "Every meaningful interaction is a dance between two parties. The client makes a request, the server responds. This is about building full-stack applications and understanding the relationship between the front-end and the back-end.",
    icon: <Users className="w-8 h-8 text-accent" />,
    technologies: ["Node.js", "Express", "REST APIs", "GraphQL", "Server Components"],
  },
   {
    title: "Rule #5: One Fight at a Time",
    subtitle: "Process & Persistence",
    description: "You can't do everything at once. Focus on one problem, one feature, one bug at a time. This is where you connect to a persistent data store, making your application remember. This is where you bring it to a new dimension.",
    icon: <Database className="w-8 h-8 text-accent" />,
    technologies: ["MongoDB", "PostgreSQL", "Firebase Firestore", "Three.js"],
  },
  {
    title: "Rule #6: No Shirts, No Shoes",
    subtitle: "Bare Metal & AI",
    description: "Strip away the non-essential. Get to the core of the problem. Here, we give the machine a mind of its own, exploring raw AI models and agentic systems. No abstractions, just pure potential.",
    icon: <BrainCircuit className="w-8 h-8 text-accent" />,
    technologies: ["Genkit", "LLMs", "Agents", "Prompt Engineering", "ShadCN UI"],
  },
  {
    title: "Rule #7: Fights Go On as Long as They Have To",
    subtitle: "Deploy & Iterate",
    description: "Shipping is not the end. It's the beginning. A project is never truly finished. It must be deployed, monitored, and continuously improved. This is about the lifecycle of software in the wild.",
    icon: <Repeat className="w-8 h-8 text-accent" />,
    technologies: ["Docker", "Kubernetes", "Firebase Hosting", "CI/CD", "Monitoring"],
  },
  {
    title: "Rule #8: If It's Your First Night, You Have to Fight",
    subtitle: "Security & Hardening",
    description: "Welcome to the real world. Your first challenge is to secure your creation. Before you can unleash it, you must protect it. This is about authentication, hardening endpoints, and responsible data management. You have to fight.",
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    technologies: ["Authentication", "Authorization", "Input Validation", "Firebase App Check", "Security Rules"],
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
