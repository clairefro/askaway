import type { FC } from "react";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Room } from "./pages/templates/Room";

interface Route {
  path: string;
  component: FC<any>;
  exact?: boolean;
}

export const routes: Route[] = [
  {
    path: "/rooms/:id",
    component: Room,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "*",
    component: NotFound,
  },
];
