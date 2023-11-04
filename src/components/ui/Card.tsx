import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="mx-4 mb-20 rounded-lg bg-gradient-to-r from-sky-800 to-sky-500 p-8 shadow-lg md:mx-auto md:w-[44rem]">
      {children}
    </div>
  );
}
