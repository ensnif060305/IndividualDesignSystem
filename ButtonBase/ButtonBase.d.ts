import * as React from "react";

type ButtonBaseProps = {
  children: React.ReactNode;

  className?: string;

  disabled?: boolean;

  type: "submit" | "button";
};

declare const ButtonBase: React.ForwardRefExoticComponent<{
  props: ButtonBaseProps;
  ref: React.RefAttributes<HTMLButtonElement>;
}>;

export default ButtonBase;
