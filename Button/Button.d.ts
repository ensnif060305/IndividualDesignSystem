import * as React from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "button" | "reset";

  className?: string;

  disabled?: boolean;

  children?: React.ReactNode;

  startIcon?: React.ReactNode;

  endIcon?: React.ReactNode;
}

declare const Button: React.ForwardRefExoticComponent<
  IButtonProps & React.RefAttributes<HTMLButtonElement>
>;

export default Button;
