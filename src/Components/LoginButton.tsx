import { TextInput } from "./TextInput";

export const LoginButton = () => {
  return (
    <>
      <TextInput
        labelText=""
        inputProps={{
          type: "submit",
          value: "Login",
        }}
      />
    </>
  );
};
