import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export function Container({
  className,
  as: Component = "div",
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "w-full px-4 md:px-6 lg:px-8 mx-auto max-w-7xl",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
} 