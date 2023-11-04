import { FormEvent, useState } from "react";

import Button from "../ui/Button.tsx";
import InputGroup from "../ui/InputGroup.tsx";

export default function SignupForm() {
  const [arePasswrodsEqual, setArePasswordsEqual] = useState<boolean>(true);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);

    const acquisitions: FormDataEntryValue[] | null =
      formData.getAll("acquisition");

    const formValues: Record<string, string | string[] | File[]> = {};

    for (const [key, value] of formData.entries()) {
      if (key === "acquisition") {
        if (acquisitions) {
          formValues[key] = Array.from(acquisitions) as File[];
        } else {
          formValues[key] = [];
        }
      } else {
        formValues[key] = value as string | string[];
      }
    }

    if (formValues.password !== formValues.confirmPassword) {
      setArePasswordsEqual(false);
      console.log("paswords are not equal");
      return;
    }
    console.log(formValues);

    // formElement.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="text-stone-200">
      <h2 className="pb-4 text-3xl">Welcome</h2>
      <p className="pb-4">Sign up before start</p>
      <section className="flex items-center gap-8 pb-8">
        <InputGroup
          required={true}
          name="email"
          id="email"
          type="email"
          label="Email"
        />
      </section>

      <section className="flex flex-col gap-1 pb-8">
        <div className="flex flex-col gap-8 md:flex-row">
          <InputGroup
            name="password"
            id="password"
            type="password"
            label="Password"
            required={true}
          />
          <InputGroup
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            label="Confirm Password"
            required={true}
          />
        </div>
        <p className="h-1  text-red-300">
          {!arePasswrodsEqual ? "Passwords are not matched" : ""}
        </p>
      </section>
      <section className="flex flex-col items-start gap-8 pb-8 md:flex-row md:items-center">
        <InputGroup
          name="firstName"
          id="firstName"
          type="text"
          label="First Name"
          required={true}
        />
        <InputGroup
          name="lastName"
          id="lastName"
          type="text"
          label="Last Name"
          required={true}
        />
      </section>
      <section className="flex items-center gap-8 pb-8 ">
        <label htmlFor="role">Your role?</label>
        <select
          id="role"
          name="role"
          className="font-bold text-stone-700"
          required
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </section>

      <section className="flex items-center gap-8 pb-8">
        <fieldset className="w-full border-2 border-stone-200 p-4">
          <legend className="px-2 text-xl">How did you find us?</legend>
          <InputGroup
            type="checkbox"
            id="google"
            label="Google"
            name="acquisition"
            value="google"
          />
          <InputGroup
            type="checkbox"
            id="friend"
            label="By friend"
            name="acquisition"
            value="friend"
          />
          <InputGroup
            type="checkbox"
            id="other"
            label="Other"
            name="acquisition"
            value="other"
          />
        </fieldset>
      </section>
      <section className="flex items-center gap-8 pb-8">
        <InputGroup
          type="checkbox"
          id="terms-and-conditions"
          label="agree to the terms and conditions"
          name="terms"
        />
      </section>

      <section className="flex justify-end gap-4">
        <Button type="reset">Reset</Button>
        <Button>Login</Button>
      </section>
    </form>
  );
}
