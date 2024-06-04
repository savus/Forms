import { useState } from "react";
import { LogoutButton } from "./LogoutButton";
import { TextInput } from "./TextInput";
import { LoginButton } from "./LoginButton";
import { useAuth } from "./Providers/AuthProvider";
import toast from "react-hot-toast";

export const LoginForm = () => {
  const [loginNameInput, setLoginNameInput] = useState("");
  const [loginPasswordInput, setLoginPasswordInput] = useState("");
  const { login } = useAuth();

  return (
    <form
      action="#"
      className="login-form"
      style={{ marginTop: "40px" }}
      onSubmit={(e) => {
        e.preventDefault();
        login({ username: loginNameInput, password: loginPasswordInput }).catch(
          (e) => {
            toast.error(e.message);
          }
        );
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
