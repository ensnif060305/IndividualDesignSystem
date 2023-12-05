import React from "react";
import clsx from "clsx";
import ButtonBase from "../ButtonBase/ButtonBase";
import ButtonContext from "./ButtonContext";
import _extends from "@babel/runtime/helpers/esm/extends";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { resolveProps } from "../utils";
import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";

const ButtonRoot = styled(ButtonBase, {
  shouldForwardProp: (prop) => isPropValid(prop),
})((props) => ({
  padding: props.sz === "large" ? "16px 24px" : "8px 16px",
  fontSize: props.sz === "large" ? "18px" : "16px",
  backgroundColor: props.variant === "primary" ? "#007bff" : "#e0e0e0",
  color: props.variant === "primary" ? "#ffffff" : "#333",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
}));

const Button = React.forwardRef((props, ref) => {
  const contextProps = React.useContext(ButtonContext);
  const resolvedProps = resolveProps(props, contextProps);

  const {
    className,
    children,
    startIcon,
    endIcon,
    variant = "primary",
    sz = "medium",
    disabled = false,
  } = resolvedProps;

  return _jsxs(
    ButtonRoot,
    _extends(
      {
        className: clsx(variant, className, disabled, sz),
        disabled: disabled,
        ref: ref,
      },
      resolvedProps,
      {
        children: [startIcon, children, endIcon].filter(Boolean),
      }
    )
  );
});

export default Button;
