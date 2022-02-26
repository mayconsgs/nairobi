import { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  variant?: "outline" | "raised";
} & ButtonHTMLAttributes<HTMLButtonElement>;
