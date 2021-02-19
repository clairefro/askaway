import React, { FC } from "react";

interface Props {
  message?: string | null;
}
export const FormErrorMsg: FC<Props> = ({ message }) => {
  if (!message) return null;

  const classes = "text-red-500 mb-1";

  return <span className={classes}>{message}</span>;
};
