import { useState } from "react";
import { TextInput } from "./TextInput";

export const InformationForm = () => {
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [sloganInput, setSloganInput] = useState("");

  const resetValues = () => {
    setNameInput("");
    setAgeInput("");
    setSloganInput("");
  };

  return (
    <form
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(nameInput, ageInput, sloganInput);
        resetValues();
      }}
    >
      <TextInput
        labelText="Name"
        inputProps={{
          type: "text",
          value: nameInput,
          onChange: (e) => setNameInput(e.target.value),
        }}
      />
      <TextInput
        labelText="Age"
        inputProps={{
          type: "text",
          placeholder: "27",
          value: ageInput,
          onChange: (e) => setAgeInput(e.target.value),
        }}
      />
      <TextInput
        labelText="Slogan"
        inputProps={{
          type: "text",
          placeholder: "I love kicking butt",
          value: sloganInput,
          onChange: (e) => setSloganInput(e.target.value),
        }}
      />
      <input type="submit" value="submit" />
    </form>
  );
};
