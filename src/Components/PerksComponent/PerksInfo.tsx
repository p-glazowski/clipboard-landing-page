import type { ReactNode } from "react";

interface PerksInfoProps {
  children: ReactNode;
}

export default function PerksInfo({ children }: PerksInfoProps) {
  return <p className="text-my-gray-500 leading-7">{children}</p>;
}
