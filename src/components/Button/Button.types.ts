import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "outline" | "raised";

export type ButtonProps = {
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonStyleType = {
  readonly [key in ButtonVariant]: string;
};
