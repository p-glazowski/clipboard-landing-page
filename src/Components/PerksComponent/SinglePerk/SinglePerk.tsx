import type { ReactNode } from "react";

interface SinglePerkProps {
  children: ReactNode;
}

export default function SinglePerk({ children }: SinglePerkProps) {
  return <div className="flex flex-col items-center gap-5">{children}</div>;
}
