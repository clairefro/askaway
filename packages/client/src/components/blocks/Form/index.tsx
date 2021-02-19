import React, { FC } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLFormElement> {}

export const Form: FC<Props> = ({ children, ...rest }) => {
  const classes = "w-full flex flex-col ";

  return (
    <form {...rest} className={classes}>
      {children}
    </form>
  );
};
