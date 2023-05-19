import React from "react";
import style from "./Button.module.css";
import cn from "classnames";

const Button = ({
  children,
  className,
  type,
  size,
  appearence,
  theme,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cn(
        style.Button,
        {
          [style.Link]: theme === "link",
          [style.ButtonS]: size === "S",
          [style.ButtonM]: size === "M",
          [style.TransparentM]: appearence === "transparentM",
        },
        [className]
      )}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
