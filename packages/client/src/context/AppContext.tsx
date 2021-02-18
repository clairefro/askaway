import * as React from "react";
import { RoomDao, RoomDaoImpl } from "../daos/RoomDao";

interface AppContextI {
  roomDao: RoomDao;
}

export const defaultContext = {
  roomDao: new RoomDaoImpl(),
};

export const AppContext = React.createContext<AppContextI>(defaultContext);

export const useAppContext = () => React.useContext<AppContextI>(AppContext);
