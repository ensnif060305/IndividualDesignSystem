"use client";

import React from "react";
import clsx from "clsx";
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
    // color: "primary" && {
    ...(color === "primary" && {
      // variant: "text"
      ...(variant === "text" && {
        color: theme.violet[500],
        "&:hover": {
          backgroundColor: theme.gray[20],
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
      ...(variant === "outline" && {
        color: theme.violet[500],
        border: `2px solid ${theme.violet[300]}`,
        "&:hover": {
          backgroundColor: theme.gray[20],
          border: `2px solid ${theme.violet[500]}`,
        },
      }),
    }),

    // color: "error" && {
    ...(color === "error" && {
      // variant: "text"
      ...(variant === "text" && {
        color: theme.red[300],
        "&:hover": {
          backgroundColor: theme.gray[20],
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
      ...(variant === "outline" && {
        color: theme.red[500],
        border: `2px solid ${theme.red[300]}`,
        "&:hover": {
          backgroundColor: theme.gray[20],
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
          backgroundColor: theme.gray[20],
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
      ...(variant === "outline" && {
        color: theme.green[500],
        border: `2px solid ${theme.green[300]}`,
        "&:hover": {
          backgroundColor: theme.gray[20],
          border: `2px solid ${theme.green[500]}`,
        },
      }),
    }),

    // sz: "medium"
    ...(sz === "medium" && {
      fontSize: "14px",
      padding: "11px 16px",
    }),
    // sz: "small"
    ...(sz === "small" && {
      fontSize: "12px",
      padding: "6px 8px",
    }),
    // sz: "large"
    ...(sz === "large" && {
      fontSize: "16px",
      padding: "16px 24px",
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
        onClick: onClick,
      },
      {
        children: [startIcon, children, endIcon].filter(Boolean),
      }
    )
  );
});

export default Button;
