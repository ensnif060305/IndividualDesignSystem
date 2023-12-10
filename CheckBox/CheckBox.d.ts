import * as React from "react";

export interface ICheckBoxProps {
  className?: string;

  position?: "top" | "bottom" | "left" | "right";

  color?: "primary" | "secondary" | "error" | "success";

  sz?: "small" | "medium" | "large";

  disabled?: boolean;
}

declare const CheckBox: (props: ICheckBoxProps) => JSX.Element;

export default CheckBox;
