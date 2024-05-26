import { ChangeEventHandler, useRef } from "react";
import { TPhoneInput } from "../types";
import { TextInput } from "./TextInput";

export const PhoneInput = ({
  phoneInput,
  setPhoneInput,
}: {
  phoneInput: TPhoneInput;
  setPhoneInput: (phoneInput: TPhoneInput) => void;
}) => {
  const refs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const maxLengths = [3, 3, 4];

  const createOnChangeHandler =
    (index: 0 | 1 | 2): ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      const target = e.target;
      const currentMaxLength = maxLengths[index];
      const prevRef = refs[index === 0 ? index : index - 1];
      const nextRef = refs[index === refs.length - 1 ? index : index + 1];
      const shouldGoToNextRef = target.value.length === currentMaxLength;
      const shouldGoToPrevRef = target.value.length === 0;

      const newState = phoneInput.map((phoneInput, phoneIndex) =>
        index === phoneIndex ? target.value : phoneInput
      ) as TPhoneInput;

      if (shouldGoToNextRef) {
        nextRef.current?.focus();
      }

      if (shouldGoToPrevRef) {
        prevRef.current?.focus();
      }

      setPhoneInput(newState);
    };

  return (
    <div className="phone-input-container">
      <div>Phone #</div>
      <TextInput
        labelText=""
        inputProps={{
          placeholder: "111",
          type: "text",
          name: "phone",
          ref: refs[0],
          onChange: createOnChangeHandler(0),
          value: phoneInput[0],
          maxLength: maxLengths[0],
        }}
      />
      -
      <TextInput
        labelText=""
        inputProps={{
          placeholder: "111",
          type: "text",
          name: "phone",
          ref: refs[1],
          onChange: createOnChangeHandler(1),
          value: phoneInput[1],
          maxLength: maxLengths[1],
        }}
      />
      -
      <TextInput
        labelText=""
        inputProps={{
          placeholder: "1111",
          type: "text",
          name: "phone",
          ref: refs[2],
          onChange: createOnChangeHandler(2),
          value: phoneInput[2],
          maxLength: maxLengths[2],
        }}
      />
    </div>
  );
};
