import type { ReactNode } from "react";

interface LogoContainerProps {
  children: ReactNode;
}

export default function LogoContainer({ children }: LogoContainerProps) {
  return (
    <div className="flex flex-col items-center gap-20 py-10">{children}</div>
  );
}
