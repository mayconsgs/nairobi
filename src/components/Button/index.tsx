import React from "react";
import styles from "./style.module.scss";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "raised",
  className = "",
  ...props
}) => (
  <button className={[styles[variant], className].join(" ")} {...props}>
    {children}
  </button>
);
