"use client";

import React from "react";
import clsx from "clsx";
import _extends from "@babel/runtime/helpers/esm/extends";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const Button = React.forwardRef(
  ({ className, startIcon, endIcon, children, props }, ref) => {
    return _jsxs(
      "button",
      _extends(
        {
          className: clsx(className),
          ref: ref,
        },
        ...props
      ),
      {
        children: [startIcon, children, endIcon].filter(Boolean),
      }
    );
  }
);

export default Button;
