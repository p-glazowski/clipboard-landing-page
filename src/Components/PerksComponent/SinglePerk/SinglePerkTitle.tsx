import type { ReactNode } from "react";

interface SinglePerkTitleProps {
  children: ReactNode;
}

export default function SinglePerkTitle({ children }: SinglePerkTitleProps) {
  return <h3 className="text-xl font-semibold">{children}</h3>;
}
