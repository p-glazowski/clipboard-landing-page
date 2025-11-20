import type { ReactNode } from "react";

interface PerksContainerProps {
  children: ReactNode;
}

export default function PerksContainer({ children }: PerksContainerProps) {
  return <section className="flex flex-col gap-20 py-10">{children}</section>;
}
