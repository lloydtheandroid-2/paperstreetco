
'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { roadmapItems } from "@/lib/roadmap-data";
import Link from 'next/link';
import { ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';
import { useAuth } from '@/components/auth/auth-provider';
import { Skeleton } from '@/components/ui/skeleton';
import { useProgressStore } from './page';


export default function DashboardPage() {
  const { user, loading } = useAuth();
  const [completedLessons] = useProgressStore();
  
  const completedCount = completedLessons.length;
  const totalLessons = roadmapItems.length;
  const progressPercentage = (completedCount / totalLessons) * 100;
  
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
            <Skeleton className="h-6 w-full" />
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
          <Progress value={progressPercentage} className="h-4" />
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
            <CardDescription>You've already proven yourself here.</CardDescription>
          </CardHeader>
          <CardContent>
            {lastCompletedLesson ? (
              <div>
                <h3 className="font-bold text-lg">{lastCompletedLesson.subtitle}</h3>
                <p className="text-muted-foreground mt-1">{lastCompletedLesson.description}</p>
              </div>
            ) : (
              <p className="text-muted-foreground">Your first fight awaits. It's only after you've lost everything that you're free to do anything.</p>
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
  );
}
