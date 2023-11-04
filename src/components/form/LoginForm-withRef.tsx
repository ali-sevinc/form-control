import { FormEvent, useRef, useState } from "react";

import { emailValidation, minLength } from "../../helpers";
import InputGroup from "../ui/InputGroup-withRef";
import Button from "../ui/Button";

export default function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [invalidValues, setInvalidValues] = useState<{
    email: false | string;
    password: false | string;
  }>({
    email: false,
    password: false,
  });

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    setInvalidValues({
      email: false,
      password: false,
    });

    const invalidEmail = !emailValidation(email!);
    const invalidPassword = !minLength(password!, 5);

    if (invalidEmail || invalidPassword) {
      setInvalidValues((prev) => ({
        email: invalidEmail ? "email" : prev.email,
        password: invalidPassword ? "password" : prev.password,
      }));
      return;
    }

    console.log("Submitted with ref: ", email, password);
    // handleReset();
  }

  function handleReset() {
    emailRef.current!.value = "";
    passwordRef.current!.value = "";
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:block">
      <h2 className="pb-4 text-center text-3xl text-stone-200 md:text-start">
        Login Form
      </h2>
      <section className="flex flex-col items-center gap-8 pb-8 md:flex-row">
        <InputGroup
          isInvalid={invalidValues.email}
          ref={emailRef}
          id="email"
          type="email"
          label="Email"
        />
        <InputGroup
          isInvalid={invalidValues.password}
          ref={passwordRef}
          id="password"
          type="password"
          label="Password"
        />
      </section>
      <section className="flex justify-end gap-4">
        <Button type="button" onClick={handleReset}>
          Reset
        </Button>
        <Button>Login</Button>
      </section>
    </form>
  );
}
