import { forwardRef, ForwardedRef } from "react";

interface PropsType {
  label: string;
  id: string;
  type: "text" | "email" | "password";
  isInvalid?: false | string;
}
const InputGroup = forwardRef(function InputGroup(
  { label, id, type, isInvalid }: PropsType,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <div className="flex flex-col items-start gap-1">
      <label htmlFor={id} className="text-xl text-stone-300">
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        type={type}
        className="rounded-md border-b-2 bg-stone-300 p-1 text-xl focus:border-b-stone-700 focus:outline-none"
      />
      <p className="h-1 text-red-300">
        {isInvalid && "Please enter a valid " + isInvalid}
      </p>
    </div>
  );
});
export default InputGroup;
