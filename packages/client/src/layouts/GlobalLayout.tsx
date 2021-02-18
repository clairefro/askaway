import React, { FC } from "react";

import "./global.css";

export const GloablLayout: FC = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
