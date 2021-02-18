import React, { FC } from "react";

type ButtonStyles = "primary" | "secondary";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: ButtonStyles;
}

const BUTTON_STYLE_MAP: { [key: string]: string } = {
  primary: "bg-pink-700 ",
  secondary: "bg-green-500 ",
};

export const Button: FC<Props> = ({
  children,
  buttonStyle = "primary",
  className = "",
  ...rest
}) => {
  const baseClasses = "px-4 py-2 text-white rounded hover:opacity-75";
  const styled = BUTTON_STYLE_MAP[buttonStyle];
  const classes = `${baseClasses} ${styled} ${className}`;

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};
