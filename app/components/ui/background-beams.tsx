"use client";

import React from "react";
import { cn } from "@/utils/cn";

type BackgroundBeamsProps = {
  className?: string;
};

export function BackgroundBeams({ className }: BackgroundBeamsProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(70%_60%_at_50%_45%,black,transparent)]",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_50%_85%,rgba(99,102,241,0.15),transparent_35%)]" />

      <div className="absolute -inset-x-24 top-1/3 h-px rotate-[-8deg] bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent animate-pulse" />
      <div className="absolute -inset-x-24 top-1/2 h-px rotate-[10deg] bg-gradient-to-r from-transparent via-teal-300/35 to-transparent animate-pulse [animation-delay:250ms]" />
      <div className="absolute -inset-x-24 top-2/3 h-px rotate-[-6deg] bg-gradient-to-r from-transparent via-sky-300/30 to-transparent animate-pulse [animation-delay:500ms]" />
    </div>
  );
}
