import * as React from "react";
import { QuestionDao, QuestionDaoImpl } from "../daos/QuestionDao";
import { RoomDao, RoomDaoImpl } from "../daos/RoomDao";

interface AppContextI {
  roomDao: RoomDao;
  questionDao: QuestionDao;
}

export const defaultContext = {
  roomDao: new RoomDaoImpl(),
  questionDao: new QuestionDaoImpl(),
};

export const AppContext = React.createContext<AppContextI>(defaultContext);

export const useAppContext = () => React.useContext<AppContextI>(AppContext);
