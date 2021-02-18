import type { FC } from "react";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

interface Route {
  path: string;
  component: FC<any>;
  exact?: boolean;
}

export const routes: Route[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "*",
    component: NotFound,
  },
];
