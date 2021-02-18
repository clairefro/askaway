import React, { FC } from "react";
import { Link } from "react-router-dom";

export const Navbar: FC = () => {
  return (
    <nav className="py-2 px-6 w-full flex justify-between">
      <div className="flex items-center">
        <Link to="/">
          <span className="text-xl sm:text-2xl text-white">askaway</span>
        </Link>
      </div>
    </nav>
  );
};
