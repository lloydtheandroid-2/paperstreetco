
'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Milestone } from "lucide-react";
import { getTrainingResources } from '@/ai/flows/get-training-resources-flow';
import type { TrainingResource } from '@/ai/flows/schemas/training-resources-schema';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { roadmapItems } from '@/lib/roadmap-data';
import { RoadmapIcon } from '@/components/shared/roadmap-icon';

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
                        <div className="flex-shrink-0">
                          <RoadmapIcon icon={item.icon} />
                        </div>
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
