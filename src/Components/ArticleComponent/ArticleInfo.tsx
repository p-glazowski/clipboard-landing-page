import type { ReactNode } from "react";

interface InfoProps {
  children: ReactNode;
}

export default function ArticleInfo({ children }: InfoProps) {
  return <p className="text-my-gray-500 text-center leading-7">{children}</p>;
}
