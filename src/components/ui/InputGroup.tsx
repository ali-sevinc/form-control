interface PropsType {
  label: string;
  id: string;
  name: string;
  required?: boolean;
  value?: string;
  type?: "text" | "email" | "password" | "date" | "checkbox";
}
export default function InputGroup({
  id,
  type,
  name,
  value,
  label,
  required,
}: PropsType) {
  if (type === "checkbox") {
    return (
      <div className="flex items-center gap-1 uppercase ">
        <input
          name={name}
          value={value}
          id={id}
          type={type}
          className="rounded-md border-b-4 bg-stone-300 p-1 text-xl text-stone-700 focus:border-b-stone-700 focus:outline-none"
        />
        <label htmlFor={id} className="text-xl text-stone-300">
          {label}
        </label>
      </div>
    );
  }

  if (type === "password") {
    return (
      <div className="flex flex-col items-start gap-1">
        <label htmlFor={id} className="text-xl text-stone-300">
          {label}
        </label>
        <input
          minLength={5}
          required={required}
          name={name}
          id={id}
          type={type}
          className="rounded-md border-b-4 bg-stone-300 p-1 text-xl text-stone-700 focus:border-b-stone-700 focus:outline-none"
        />
      </div>
    );
  }
  return (
    <div className="flex flex-col items-start gap-1">
      <label htmlFor={id} className="text-xl text-stone-300">
        {label}
      </label>
      <input
        required={required}
        name={name}
        id={id}
        type={type ? type : ""}
        className="rounded-md border-b-4 bg-stone-300 p-1 text-xl text-stone-700 focus:border-b-stone-700 focus:outline-none"
      />
    </div>
  );
}
