
'use client';

import { useEffect, useState, useRef } from 'react';
import { getUserCount } from '@/ai/flows/get-user-count-flow';
import { Skeleton } from '@/components/ui/skeleton';
import { Users } from 'lucide-react';

const ANIMATION_DURATION = 1500; // 1.5 seconds

export default function MemberCount() {
    const [finalCount, setFinalCount] = useState<number | null>(null);
    const [animatedCount, setAnimatedCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const frameRef = useRef<number>();
    const startTimeRef = useRef<number>();

    useEffect(() => {
        async function fetchCount() {
            try {
                const userCount = await getUserCount();
                setFinalCount(userCount);
            } catch (error) {
                console.error("Failed to fetch member count:", error);
                setFinalCount(0);
            } finally {
                setLoading(false);
            }
        }
        fetchCount();

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (loading || finalCount === null) return;

        const animateCount = (timestamp: number) => {
            if (startTimeRef.current === undefined) {
                startTimeRef.current = timestamp;
            }

            const elapsed = timestamp - startTimeRef.current;
            const progress = Math.min(elapsed / ANIMATION_DURATION, 1);
            const currentAnimatedValue = Math.floor(progress * finalCount);

            setAnimatedCount(currentAnimatedValue);

            if (elapsed < ANIMATION_DURATION) {
                frameRef.current = requestAnimationFrame(animateCount);
            } else {
                setAnimatedCount(finalCount); 
            }
        };

        frameRef.current = requestAnimationFrame(animateCount);

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
            startTimeRef.current = undefined;
        };
    }, [loading, finalCount]);

    if (loading) {
        return <Skeleton className="h-6 w-28" />;
    }

    return (
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Users className="h-4 w-4 text-primary" />
            <span>Members: {animatedCount.toLocaleString()}</span>
        </div>
    );
}
