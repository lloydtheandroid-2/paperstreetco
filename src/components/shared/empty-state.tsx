
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface EmptyStateProps {
    icon: LucideIcon;
    title: string;
    description: string;
    className?: string;
}

export default function EmptyState({ icon: Icon, title, description, className }: EmptyStateProps) {
    return (
        <div className={cn("flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg bg-card/50", className)}>
            <div className="bg-muted p-4 rounded-full mb-4">
                <Icon className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-muted-foreground max-w-md">{description}</p>
        </div>
    )
}
