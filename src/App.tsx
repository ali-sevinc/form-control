import LoginFormCustomHook from "./components/form/LoginForm-cutomHook.tsx";
// import LoginFormState from "./components/form/LoginForm-withState.tsx";
// import LoginFormRef from "./components/form/LoginForm-withRef.tsx";
// import SignupForm from "./components/form/SignupForm.tsx";

import Header from "./components/layout/Header.tsx";
import Card from "./components/ui/Card.tsx";

export default function App() {
  return (
    <>
      <Header />;
      <main>
        <Card>
          <LoginFormCustomHook />
        </Card>
        <Card>{/* <LoginFormState /> */}</Card>
        <Card>{/* <LoginFormRef /> */}</Card>
        <Card>{/* <SignupForm /> */}</Card>
      </main>
    </>
  );
}
