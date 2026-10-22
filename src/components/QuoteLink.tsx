"use client";

import type { ReactNode } from "react";
import type { ProjectType } from "@/data/site";
import { usePlan } from "./PlanContext";

interface Props {
  plan: ProjectType;
  className?: string;
  children: ReactNode;
}

/** Anchor to the contact form that also pre-selects the package. */
export default function QuoteLink({ plan, className, children }: Props) {
  const { setPlan } = usePlan();
  return (
    <a className={className} href="#contact" onClick={() => setPlan(plan)}>
      {children}
    </a>
  );
}
