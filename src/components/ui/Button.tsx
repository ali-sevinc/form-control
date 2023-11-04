import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "reset";
}

export default function Button({ children, onClick, type }: PropsType) {
  if (type) {
    return (
      <button
        type={type}
        onClick={onClick ? onClick : () => {}}
        className=" px-4  py-2 text-lg font-bold text-stone-200 hover:text-stone-300"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick ? onClick : () => {}}
      className="rounded-md bg-sky-400 px-4 py-2  text-lg font-bold text-stone-100 hover:bg-sky-600 "
    >
      {children}
    </button>
  );
}
