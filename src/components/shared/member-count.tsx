'use client';

import { useEffect, useState } from 'react';
import { getUserCount } from '@/ai/flows/get-user-count-flow';
import { Skeleton } from '@/components/ui/skeleton';
import { Users } from 'lucide-react';

export default function MemberCount() {
    const [count, setCount] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCount() {
            try {
                const userCount = await getUserCount();
                setCount(userCount);
            } catch (error) {
                console.error("Failed to fetch member count:", error);
                setCount(0); // Fallback on error
            } finally {
                setLoading(false);
            }
        }
        fetchCount();
    }, []);

    if (loading) {
        return <Skeleton className="h-6 w-28" />;
    }

    return (
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Users className="h-4 w-4 text-primary" />
            <span>Members: {count?.toLocaleString() || '...'}</span>
        </div>
    );
}
