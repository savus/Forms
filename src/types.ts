import { ComponentProps } from "react";

export type TInputProps = ComponentProps<"input">;

export type TDropdownMenuState = "none" | "registration-menu";

export type TModalActiveState = "none" | "registration-form";

export type TPhoneInput = [string, string, string];

export type TUserInformation = {
  username: string;
  password: string;
  city: string;
  email: string;
  phoneInput: TPhoneInput;
};
