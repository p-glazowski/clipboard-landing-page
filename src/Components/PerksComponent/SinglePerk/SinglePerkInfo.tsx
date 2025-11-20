import type { ReactNode } from "react";

interface SinglePerkInfoProps {
  children: ReactNode;
}

export default function SinglePerkInfo({ children }: SinglePerkInfoProps) {
  return <p className="text-my-gray-500 text-center">{children}</p>;
}
