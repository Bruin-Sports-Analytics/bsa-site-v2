"use client";

import { forwardRef, type ElementType, type PointerEvent, type ReactNode } from "react";
import { useGlassPointer } from "@/hooks/useGlassPointer";
import { cn } from "@/lib/cn";

type GlassVariant = "clear" | "regular" | "strong";
type GlassTint = "none" | "blue" | "gold";
type GlassRadius = "sm" | "md" | "lg" | "pill";

type GlassSurfaceProps = {
  as?: ElementType;
  variant?: GlassVariant;
  tint?: GlassTint;
  interactive?: boolean;
  radius?: GlassRadius;
  className?: string;
  children?: ReactNode;
  onPointerMove?: (event: PointerEvent<HTMLElement>) => void;
  onPointerLeave?: (event: PointerEvent<HTMLElement>) => void;
  [key: string]: unknown;
};

function GlassSurfaceInner(
  {
    as,
    variant = "regular",
    tint = "none",
    interactive = false,
    radius = "md",
    className,
    children,
    onPointerMove,
    onPointerLeave,
    ...props
  }: GlassSurfaceProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  const Component = as ?? "div";
  const pointer = useGlassPointer(interactive);

  return (
    <Component
      ref={ref}
      className={cn(
        "glass",
        `glass--${variant}`,
        tint !== "none" && `glass--${tint}`,
        `glass--radius-${radius}`,
        interactive && "glass--interactive",
        className
      )}
      data-interactive={interactive ? "true" : undefined}
      onPointerMove={(event: PointerEvent<HTMLElement>) => {
        pointer.onPointerMove(event);
        onPointerMove?.(event);
      }}
      onPointerLeave={(event: PointerEvent<HTMLElement>) => {
        pointer.onPointerLeave(event);
        onPointerLeave?.(event);
      }}
      {...props}
    >
      {children}
    </Component>
  );
}

export const GlassSurface = forwardRef(GlassSurfaceInner);
