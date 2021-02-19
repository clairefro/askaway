import React, { FC } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLHeadingElement> {}

export const H1: FC<Props> = ({ children, ...rest }) => {
  const classes = "text-3xl mb-2";

  return (
    <h1 {...rest} className={classes}>
      {children}
    </h1>
  );
};
