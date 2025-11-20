import type { ReactNode } from "react";

interface PerksTitleProps {
  children: ReactNode;
}

export default function PerksTitle({ children }: PerksTitleProps) {
  return <h2 className="text-3xl font-semibold">{children}</h2>;
}
