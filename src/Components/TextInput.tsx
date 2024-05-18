import { TInputProps } from "../types";

export const TextInput = ({
  labelText,
  inputProps,
}: {
  labelText: string;
  inputProps: TInputProps;
}) => {
  return (
    <div className="input-container">
      <label htmlFor={labelText.toLowerCase()}>{labelText}</label>
      <input
        id={labelText.toLowerCase()}
        name={labelText.toLowerCase()}
        {...inputProps}
      />
    </div>
  );
};
