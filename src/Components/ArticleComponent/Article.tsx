import type { ReactNode } from "react";

interface ArticleProps {
  children: ReactNode;
}

export default function Article({ children }: ArticleProps) {
  return (
    <article className="flex flex-col items-center gap-10 pt-20 pb-20">
      {children}
    </article>
  );
}
