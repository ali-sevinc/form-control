const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export function emailValidation(email: string) {
  return emailRegex.test(email);
}
export function minLength(value: string, min: number) {
  return value.length >= min;
}

export function isNotEmpty(value: string) {
  return value.trim().length > 0;
}
