import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: "left" | "center" | "right";
    className?: string;
}

export default function SectionHeading({
    title,
    subtitle,
    align = "center",
    className,
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "mb-12 space-y-4",
                {
                    "text-center": align === "center",
                    "text-left": align === "left",
                    "text-right": align === "right",
                },
                className
            )}
        >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
            <div
                className={cn("h-1 w-20 bg-primary rounded-full mt-4", {
                    "mx-auto": align === "center",
                    "ml-0": align === "left",
                    "ml-auto": align === "right",
                })}
            />
        </div>
    );
}
