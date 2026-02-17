"use client";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: string;
  delay?: string;
  duration?: string;
  threshold?: number;
  as?: React.ElementType;
}

export function AnimateOnScroll({
  children,
  className,
  animation = "animate-in fade-in slide-in-from-bottom-4",
  delay = "",
  duration = "duration-700",
  threshold = 0.15,
  as: Component = "div",
}: AnimateOnScrollProps) {
  const { ref, isInView } = useInView({ threshold });

  return (
    <Component
      ref={ref}
      className={cn(
        !isInView && "opacity-0",
        isInView && animation,
        isInView && duration,
        isInView && delay,
        isInView && "fill-mode-forwards",
        className
      )}
    >
      {children}
    </Component>
  );
}
