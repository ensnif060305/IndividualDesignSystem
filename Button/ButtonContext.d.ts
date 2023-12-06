import * as React from "react";
import type { IButtonProps } from "./Button";

interface IButtonContext {
  className?: string;

  disabled?: boolean;

  variant?: IButtonProps["variant"];

  color?: IButtonProps["color"];

  sz?: IButtonProps["sz"];
}

declare const ButtonContext: React.Context<IButtonContext>;
export default ButtonContext;
