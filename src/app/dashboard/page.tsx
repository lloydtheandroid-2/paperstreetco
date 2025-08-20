
'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { roadmapItems } from "@/lib/roadmap-data";
import Link from 'next/link';
import { ChevronRight, CheckCircle, ArrowRight, Check, Circle } from 'lucide-react';
import { useAuth } from '@/components/auth/auth-provider';
import { Skeleton } from '@/components/ui/skeleton';
import { useProgressStore } from '@/hooks/use-progress-store';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


export default function DashboardPage() {
  const { user, loading } = useAuth();
  const { completedLessons } = useProgressStore();
  
  const completedCount = completedLessons.length;
  const totalLessons = roadmapItems.length;
  
  const lastCompletedLesson = completedCount > 0 ? roadmapItems[completedCount - 1] : null;
  const nextLesson = completedCount < totalLessons ? roadmapItems[completedCount] : null;

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="mb-8">
          <Skeleton className="h-10 w-1/2 mb-2" />
          <Skeleton className="h-6 w-1/3" />
        </div>
        <Card className="mb-8">
          <CardHeader>
            <Skeleton className="h-8 w-1/4 mb-2" />
            <Skeleton className="h-4 w-1/3" />
          </CardHeader>
          <CardContent>
             <div className="flex justify-between items-center py-4">
              {[...Array(totalLessons)].map((_, i) => (
                <Skeleton key={i} className="h-8 w-8 rounded-full" />
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="grid md:grid-cols-2 gap-8">
            <Skeleton className="h-48" />
            <Skeleton className="h-48" />
        </div>
      </div>
    )
  }

  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto p-4 md:p-8 animate-in fade-in-50 duration-500">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Welcome, {user?.displayName?.split(' ')[0] || 'Member'}</h1>
          <p className="text-muted-foreground">This is your space. Your progress is your own.</p>
        </div>

        {/* Progress Card */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle>Your Roadmap Progress</CardTitle>
            <CardDescription>{completedCount} of {totalLessons} rules mastered.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              {roadmapItems.map((item, index) => {
                const isCompleted = completedLessons.includes(index);
                const isCurrent = index === completedCount;
                const isNext = index === completedCount;
                
                return (
                  <React.Fragment key={index}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link href={`/learn?lesson=${index}`}>
                          <div
                            className={cn(
                              "w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                              isCompleted ? "bg-primary border-primary" : "bg-muted border-border",
                              isCurrent && "border-primary scale-125 shadow-lg shadow-primary/20",
                              !isCompleted && !isCurrent && "hover:border-primary/50"
                            )}
                          >
                            {isCompleted ? (
                              <Check className="w-5 h-5 text-primary-foreground" />
                            ) : (
                               <Circle className={cn("w-3 h-3", isCurrent ? 'text-primary' : 'text-muted-foreground')}/>
                            )}
                          </div>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="font-semibold">{item.subtitle}</p>
                        <p className="text-sm text-muted-foreground">{ isCompleted ? "Completed" : isCurrent ? "Next Up" : "Pending" }</p>
                      </TooltipContent>
                    </Tooltip>

                    {index < roadmapItems.length - 1 && (
                       <div className={cn(
                        "flex-1 h-1 transition-colors duration-500",
                        completedLessons.includes(index) ? 'bg-primary' : 'bg-border'
                       )}></div>
                    )}
                  </React.Fragment>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Current & Next Lesson */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 text-primary">
                <CheckCircle className="w-6 h-6" />
                <CardTitle className="text-2xl">Last Accomplishment</CardTitle>
              </div>
              <CardDescription>
                {lastCompletedLesson ? "You've already proven yourself here." : "A blank slate is a world of opportunity."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {lastCompletedLesson ? (
                <div>
                  <h3 className="font-bold text-lg">{lastCompletedLesson.subtitle}</h3>
                  <p className="text-muted-foreground mt-1">{lastCompletedLesson.description}</p>
                </div>
              ) : (
                <div>
                  <h3 className="font-bold text-lg">Your First Fight Awaits</h3>
                  <p className="text-muted-foreground mt-1">It's only after you've lost everything that you're free to do anything. Your journey starts now.</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="border-primary shadow-lg shadow-primary/10">
            <CardHeader>
               <div className="flex items-center gap-3 text-primary">
                <ArrowRight className="w-6 h-6" />
                <CardTitle className="text-2xl">Your Next Challenge</CardTitle>
              </div>
              <CardDescription>This is where you go next.</CardDescription>
            </CardHeader>
            <CardContent>
              {nextLesson ? (
                 <div>
                  <h3 className="font-bold text-lg">{nextLesson.subtitle}</h3>
                  <p className="text-muted-foreground mt-1">{nextLesson.description}</p>
                  <Button asChild className="mt-4">
                    <Link href="/learn">
                      Begin Lesson <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              ) : (
                 <div>
                  <h3 className="font-bold text-lg">You've Mastered the Rules</h3>
                  <p className="text-muted-foreground mt-1">You've been through it all. Now, the only thing left is to build.</p>
                   <Button asChild className="mt-4">
                    <Link href="/roadmap">
                      Review the Roadmap <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  );
}
