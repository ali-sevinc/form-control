import { ChangeEvent } from "react";

interface PropsType {
  value: string;
  label: string;
  id: string;
  type: "text" | "email" | "password" | "date";
  name?: string;
  isInvalid?: string | false;
  inputIdentifier?: string;
  setValueWithName?: (e: ChangeEvent<HTMLInputElement>) => void;
  setValueWithIdentifier?: (
    e: ChangeEvent<HTMLInputElement>,
    identifier: string,
  ) => void;
  onBlur?: (name: string) => void;
}

const styles =
  "rounded-md border-b-4 border-b-stone-400 bg-stone-300 p-1 text-xl focus:border-b-stone-700 focus:outline-none";

export default function InputGroup({
  id,
  name,
  type,
  value,
  label,
  onBlur,
  isInvalid,
  inputIdentifier,
  setValueWithName,
  setValueWithIdentifier,
}: PropsType) {
  if (inputIdentifier && setValueWithIdentifier) {
    return (
      <div className="flex flex-col items-start gap-1">
        <label htmlFor={id} className="text-xl text-stone-300">
          {label}
        </label>
        <input
          id={id}
          value={value}
          onChange={(event) => setValueWithIdentifier(event, inputIdentifier)}
          type={type ? type : ""}
          className={styles}
        />
        <p className="h-1 text-red-300">{isInvalid ? isInvalid : ""}</p>
      </div>
    );
  }

  if (name && setValueWithName) {
    return (
      <div className="flex flex-col items-start gap-1">
        <label htmlFor={id} className="text-xl text-stone-300">
          {label}
        </label>
        <input
          id={id}
          name={name}
          value={value}
          onChange={setValueWithName}
          type={type}
          onBlur={() => (onBlur ? onBlur(name) : {})}
          className={styles}
        />
        <p className="h-1 text-red-300">{isInvalid ? isInvalid : ""}</p>
      </div>
    );
  }
}
