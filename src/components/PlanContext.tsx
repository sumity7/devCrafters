"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { ProjectType } from "@/data/site";

interface PlanContextValue {
  plan: ProjectType | null;
  setPlan: (plan: ProjectType) => void;
}

const PlanContext = createContext<PlanContextValue | null>(null);

export function PlanProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<ProjectType | null>(null);
  return <PlanContext.Provider value={{ plan, setPlan }}>{children}</PlanContext.Provider>;
}

export function usePlan(): PlanContextValue {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used inside <PlanProvider>");
  return ctx;
}
