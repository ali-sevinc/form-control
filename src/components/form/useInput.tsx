import { useState, ChangeEvent } from "react";
export default function useInput(
  validationFunction: (value: string) => boolean,
) {
  const [inputValue, setInputValue] = useState<string>("");
  const [isBlur, setIsBlur] = useState<boolean>(false);

  const valueIsValid = validationFunction(inputValue);

  //   console.log("valueIsValid :", valueIsValid);

  const isInputInvalid = isBlur && !valueIsValid;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
    setIsBlur(false);
  }

  return {
    inputValue,
    handleChange,
    setIsBlur,
    isInputInvalid,
    setInputValue,
  };
}
