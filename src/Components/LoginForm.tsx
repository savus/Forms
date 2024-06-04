import { useState } from "react";
import { LogoutButton } from "./LogoutButton";
import { TextInput } from "./TextInput";
import { LoginButton } from "./LoginButton";

export const LoginForm = () => {
  const [loginNameInput, setLoginNameInput] = useState("");
  const [loginPasswordInput, setLoginPasswordInput] = useState("");

  return (
    <form
      action="#"
      className="login-form"
      style={{ marginTop: "40px" }}
      onSubmit={(e) => {
        e.preventDefault();
        console.log(loginNameInput, loginPasswordInput);
      }}
    >
      <h3>Login</h3>
      <TextInput
        labelText="Username"
        inputProps={{
          type: "text",
          value: loginNameInput,
          onChange: (e) => setLoginNameInput(e.target.value),
        }}
      />
      <TextInput
        labelText="Password"
        inputProps={{
          type: "password",
          value: loginPasswordInput,
          onChange: (e) => setLoginPasswordInput(e.target.value),
        }}
      />
      <LoginButton />
      <LogoutButton />
    </form>
  );
};
