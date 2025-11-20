import type { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export default function ArticleTitle({ children }: TitleProps) {
  return <h2 className="text-center text-3xl font-semibold">{children}</h2>;
}
