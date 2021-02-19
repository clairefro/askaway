import React, { FC } from "react";
import { CreateRoomForm } from "../components/blocks/forms/CreateRoomForm";
import { JoinRoomWidget } from "../components/JoinRoomWidget";

export const Home: FC = () => {
  return (
    <div>
      <p>Welcome home</p>
      <CreateRoomForm />
      <p>Or hop into a room</p>
      <JoinRoomWidget /> 
    </div>
  );
};
