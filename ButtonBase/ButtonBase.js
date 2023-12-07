import React from "react";
import clsx from "clsx";
import { jsxs as _jsxs } from "react/jsx-runtime";
import styled from "@emotion/styled";
import _extends from "@babel/runtime/helpers/esm/extends";

const ButtonBaseRoot = styled(
  "button",
  {}
)(({ disabled }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  outline: 0,
  border: 0,
  borderRadius: 0,
  margin: 0,
  padding: 0,
  cursor: disabled ? "default" : "pointer",
  pointerEvents: disabled ? "none" : "auto",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  WebkitAppearance: "none",
  textDecoration: "none",
  color: "inherit",
  "&::MozFocusInner": {
    borderStyle: "none",
  },
  "@media print": {
    colorAdjust: "exact",
  },
}));

const ButtonBase = React.forwardRef((props, ref) => {
  const { children, className, disabled = false, type, onClick } = props;
  return _jsxs(
    ButtonBaseRoot,
    _extends(
      {
        className: className,
        ref: ref,
        disabled: disabled,
        type: type,
        onClick: onClick,
      },
      {
        children: [children],
      }
    )
  );
});

export default ButtonBase;
