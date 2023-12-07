"use client";

import React from "react";
import clsx from "clsx";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const included = [
  "children",
  "color",
  "component",
  "className",
  "disabled",
  "endIcon",
  "sz",
  "startIcon",
  "type",
  "variant",
];
import ButtonBase from "../ButtonBase/ButtonBase";
import ButtonContext from "./ButtonContext";
import _extends from "@babel/runtime/helpers/esm/extends";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { resolveProps } from "../utils";
import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import useTheme from "../style/useTheme";

const ButtonRoot = styled(ButtonBase, {
  shouldForwardProp: (prop) => isPropValid(prop),
})(({ color, variant, sz, theme }) => {
  return {
    //default button
    minWidth: "72px",
    borderRadius: "4px",
    transition: "all 250ms cubic-bezier(1.000, 0.010, 0.200, 0.800)",
    // color: "primary" && {
    ...(color === "primary" && {
      // variant: "text"
      ...(variant === "text" && {
        color: theme.violet[500],
        "&:hover": {
          backgroundColor: theme.gray[200],
        },
      }),
      // variant: "filled"
      ...(variant === "filled" && {
        color: theme.gray[50],
        backgroundColor: theme.violet[300],
        "&:hover": {
          backgroundColor: theme.violet[500],
        },
      }),
      // variant: "outline"
      ...(variant === "outlined" && {
        color: theme.violet[500],
        border: `2px solid ${theme.violet[300]}`,
        "&:hover": {
          backgroundColor: theme.gray[200],
          border: `2px solid ${theme.violet[500]}`,
        },
      }),
    }),

    // color: "secondary" && {
    ...(color === "secondary" && {
      // variant: "text"
      ...(variant === "text" && {
        color: theme.blue[500],
        "&:hover": {
          backgroundColor: theme.gray[200],
        },
      }),
      // variant: "filled"
      ...(variant === "filled" && {
        color: theme.gray[50],
        backgroundColor: theme.blue[300],
        "&:hover": {
          backgroundColor: theme.blue[500],
        },
      }),
      // variant: "outline"
      ...(variant === "outlined" && {
        color: theme.blue[500],
        border: `2px solid ${theme.blue[300]}`,
        "&:hover": {
          backgroundColor: theme.gray[200],
          border: `2px solid ${theme.blue[500]}`,
        },
      }),
    }),

    // color: "error" && {
    ...(color === "error" && {
      // variant: "text"
      ...(variant === "text" && {
        color: theme.red[300],
        "&:hover": {
          backgroundColor: theme.gray[200],
        },
      }),
      // variant: "filled"
      ...(variant === "filled" && {
        color: theme.gray[50],
        backgroundColor: theme.red[300],
        "&:hover": {
          backgroundColor: theme.red[500],
        },
      }),
      // variant: "outline"
      ...(variant === "outlined" && {
        color: theme.red[500],
        border: `2px solid ${theme.red[300]}`,
        "&:hover": {
          backgroundColor: theme.gray[200],
          border: `2px solid ${theme.red[500]}`,
        },
      }),
    }),

    // color: "success" && {
    ...(color === "success" && {
      // variant: "text"
      ...(variant === "text" && {
        color: theme.green[500],
        "&:hover": {
          backgroundColor: theme.gray[200],
        },
      }),
      // variant: "filled"
      ...(variant === "filled" && {
        color: theme.gray[50],
        backgroundColor: theme.green[300],
        "&:hover": {
          backgroundColor: theme.green[500],
        },
      }),
      // variant: "outline"
      ...(variant === "outlined" && {
        color: theme.green[500],
        border: `2px solid ${theme.green[300]}`,
        "&:hover": {
          backgroundColor: theme.gray[200],
          border: `2px solid ${theme.green[500]}`,
        },
      }),
    }),

    // sz: "medium"
    ...(sz === "medium" && {
      fontSize: "0.875rem",
      lineHeight: "1rem",
      padding: "9px 27px",
    }),
    // sz: "small"
    ...(sz === "small" && {
      fontSize: "0.75rem",
      lineHeight: "0.875rem",
      padding: "8px 24px",
    }),
    // sz: "large"
    ...(sz === "large" && {
      fontSize: "1rem",
      lineHeight: "1.1875rem",
      padding: "11px 33px",
    }),
  };
});

const Button = React.forwardRef((props, ref) => {
  const contextProps = React.useContext(ButtonContext);
  const resolvedProps = resolveProps(props, contextProps);
  const theme = useTheme();

  const {
    className,
    children,
    startIcon,
    endIcon,
    color = "primary",
    variant = "text",
    sz = "medium",
    disabled = false,
  } = resolvedProps;

  const other = _objectWithoutPropertiesLoose(props, included);

  console.log(other);

  return _jsxs(
    ButtonRoot,
    _extends(
      {
        className: clsx(color, variant, className, { disabled }, sz),
        disabled: disabled,
        ref: ref,
        color: color,
        variant: variant,
        sz: sz,
        theme: theme,
      },
      other,
      {
        children: [startIcon, children, endIcon].filter(Boolean),
      }
    )
  );
});

export default Button;
