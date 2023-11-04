import { ChangeEvent, FormEvent, useState } from "react";

import { emailValidation, minLength, isNotEmpty } from "../../helpers";
import InputGroup from "../ui/InputGroup-withState";
import Button from "../ui/Button";

type StateType = { email: string; password: string };

export default function LoginForm() {
  const [enteredValuesWithName, setEnteredValuesWithName] = useState<StateType>(
    {
      email: "",
      password: "",
    },
  );

  const [isBlur, setIsBlur] = useState({
    email: false,
    password: false,
  });

  // const [enteredValuesWithIdentifier, setEnteredValuesWithIdentifier] =
  //   useState<StateType>({
  //     email: "",
  //     password: "",
  //   });

  /*Validation */
  const isEmailInvalid =
    isBlur.email &&
    !emailValidation(enteredValuesWithName.email) &&
    !isNotEmpty(enteredValuesWithName.email);
  const isPasswordInvalid =
    isBlur.password &&
    !minLength(enteredValuesWithName.password, 5) &&
    !isNotEmpty(enteredValuesWithName.password);

  function handleBlur(name: string) {
    setIsBlur((prev) => ({
      ...prev,
      [name]: true,
    }));
  }

  /*v1 with name */
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setEnteredValuesWithName((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    setIsBlur((prev) => ({
      ...prev,
      [event.target.name]: false,
    }));
  }

  /*v2 with identifier */
  // function handleChangeIdentifier(
  //   event: ChangeEvent<HTMLInputElement>,
  //   inputIdentifier: string,
  // ) {
  //   setEnteredValuesWithIdentifier((prev) => ({
  //     ...prev,
  //     [inputIdentifier]: event.target.value,
  //   }));
  // }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const invalidEmail = !emailValidation(enteredValuesWithName.email);
    const invalidPassword = !minLength(enteredValuesWithName.password, 5);

    if (invalidEmail || invalidPassword) {
      setIsBlur((prev) => ({
        email: invalidEmail ? true : prev.email,
        password: invalidPassword ? true : prev.password,
      }));
      return;
    }

    console.log("submitted with name: ", enteredValuesWithName);

    // console.log(
    //   "submitted with identifier: ",
    //   enteredValuesWithIdentifier,
    // );
  }

  function handleReset() {
    setEnteredValuesWithName({ email: "", password: "" });
    // setEnteredValuesWithIdentifier({ email: "", password: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:block">
      <h2 className="pb-4 text-center text-3xl text-stone-200 md:text-start">
        Login Form
      </h2>
      <section className="flex flex-col items-center gap-8 pb-8 md:flex-row">
        <p className="text-stone-100">With "Name"</p>
        <InputGroup
          value={enteredValuesWithName.email}
          onBlur={handleBlur}
          setValueWithName={handleChange}
          id="email"
          name="email"
          type="email"
          label="Email"
          isInvalid={isEmailInvalid && "Please enter a valid email address"}
        />
        <InputGroup
          value={enteredValuesWithName.password}
          onBlur={handleBlur}
          setValueWithName={handleChange}
          id="password"
          name="password"
          type="password"
          label="Password"
          isInvalid={isPasswordInvalid && "Please enter a valid password"}
        />
      </section>
      {/* <section className="flex items-center gap-8 pb-8">
        <p className="text-stone-100">With "identifier"</p>
        <InputGroup
          value={enteredValuesWithIdentifier.email}
          setValueWithIdentifier={handleChangeIdentifier}
          id="email2"
          inputIdentifier="email"
          type="email"
          label="Email"
        />
        <InputGroup
          value={enteredValuesWithIdentifier.password}
          setValueWithIdentifier={handleChangeIdentifier}
          inputIdentifier="password"
          id="password2"
          type="password"
          label="Password"
        />
      </section> */}
      <section className="flex justify-end gap-4">
        <Button type="button" onClick={handleReset}>
          Reset
        </Button>
        <Button>Login</Button>
      </section>
    </form>
  );
}
