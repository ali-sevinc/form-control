import { FormEvent } from "react";

import { emailValidation, minLength } from "../../helpers";
import InputGroup from "../ui/InputGroup-withState";
import Button from "../ui/Button";
import useInput from "./useInput";

export default function LoginForm() {
  const {
    handleChange: emailChange,
    inputValue: emailValue,
    isInputInvalid: isEmailInvalid,
    setIsBlur: setEmailBlur,
    // setInputValue: setEmailValue,
  } = useInput(emailValidation);
  const {
    handleChange: passwordChange,
    inputValue: passwordValue,
    isInputInvalid: isPasswordInvalid,
    setIsBlur: setPasswordBlur,
    // setInputValue: setPasswordValue,
  } = useInput((value) => minLength(value, 5));

  // console.log("isEmailInvalid ", isEmailInvalid);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (isEmailInvalid || isPasswordInvalid) {
      return console.log("Please enter valid values!");
    }
    console.log("email: ", emailValue);
    console.log("passwrod: ", passwordValue);
  }

  function handleReset() {
    //   setEmailValue("");
    //   setPasswordValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:block">
      <h2 className="pb-4 text-center text-3xl text-stone-200 md:text-start">
        Login Form
      </h2>
      <section className="flex flex-col items-center gap-8 pb-8 md:flex-row">
        <InputGroup
          value={emailValue}
          onBlur={() => setEmailBlur(true)}
          setValueWithName={emailChange}
          id="email"
          name="email"
          type="email"
          label="Email"
          isInvalid={isEmailInvalid && "Please enter a valid email address"}
        />
        <InputGroup
          value={passwordValue}
          onBlur={() => setPasswordBlur(true)}
          setValueWithName={passwordChange}
          id="password"
          name="password"
          type="password"
          label="Password"
          isInvalid={isPasswordInvalid && "Please enter a valid password"}
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
