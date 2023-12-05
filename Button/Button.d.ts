import * as React from "react";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;

  variant?: "text" | "outlined" | "filled";

  sz?: "small" | "medium" | "large";

  disabled?: boolean;

  children?: React.ReactNode;

  startIcon?: React.ReactNode;

  endIcon?: React.ReactNode;
}

declare const Button: React.ForwardRefExoticComponent<{
  props: IButtonProps;
  ref: React.RefAttributes<HTMLButtonElement>;
}>;

export default Button;
