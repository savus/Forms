import { TInputProps } from "../types";

export const TextInput = ({
  labelText,
  inputProps,
}: {
  labelText: string;
  inputProps: TInputProps;
}) => {
  return (
    <div className="text-input">
      {labelText != "" && (
        <label htmlFor={labelText.toLowerCase()}>{labelText}</label>
      )}
      <input {...inputProps} />
    </div>
  );
};
