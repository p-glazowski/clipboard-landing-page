import type { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  bgColor?: "green" | "blue";
}

export default function Button({ children, bgColor = "green" }: ButtonProps) {
  const bgColorBtn =
    bgColor === "green"
      ? `bg-my-green shadow-my-green`
      : `bg-my-blue shadow-my-blue`;

  return (
    <button
      className={clsx(
        `${bgColorBtn} rounded-4xl p-3 font-semibold text-white shadow-[0px_5px_5px_2px]`,
      )}
    >
      {children}
    </button>
  );
}
