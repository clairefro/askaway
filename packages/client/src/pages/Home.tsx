import React, { FC } from "react";
import { CreateRoomForm } from "../components/blocks/forms/CreateRoomForm";
// import { useAppContext } from "../context/AppContext";

export const Home: FC = () => {
  // const { roomDao } = useAppContext();

  // const createRoom = async () => {
  //   try {
  //     const room = await roomDao.create({ title: "foo", host_secret: "bar" });
  //     alert(`create new room: ${room.title}`);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <div>
      <p>Welcome home</p>
      <CreateRoomForm />  
    </div>
  );
};
