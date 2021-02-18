import React, { FC } from "react";
import { Navbar } from "../components/blocks/Navbar";

import "./global.css";

export const GloablLayout: FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-screen-lg py-12 px-6">
        {children}
      </div>
    </div>
  );
};
