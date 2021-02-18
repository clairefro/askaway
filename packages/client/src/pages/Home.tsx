import React, { FC } from "react";
import { Button } from "../components/blocks/Button";
import { useAppContext } from "../context/AppContext";

export const Home: FC = () => {
  const { roomDao } = useAppContext();

  const createRoom = async () => {
    try {
      const room = await roomDao.create({ title: "foo", host_secret: "bar" });
      alert(`create new room: ${room.title}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <p>Welcome home</p>
      <Button onClick={createRoom}>Create a room</Button>
    </div>
  );
};
