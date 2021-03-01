import React, { FC } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLHeadingElement> {}

interface Props {
  data: Question;
}

export const Question: FC<Props> = ({
  data: { _id, message, username, createdAt },
}) => {
  return (
    <div>
      <p className="text-2xl">{message}</p>
      <p>{username}</p>
    </div>
  );
};
