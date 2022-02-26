import React from "react";
import { ButtonProps, ButtonStyle } from ".";

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "raised",
  className = "",
  ...props
}) => (
  <button className={[ButtonStyle[variant], className].join(" ")} {...props}>
    {children}
  </button>
);
