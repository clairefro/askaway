import React, { FC } from "react";
import { CreateRoomForm } from "../components/blocks/forms/CreateRoomForm";
import { H1 } from "../components/blocks/H1";
import { JoinRoomWidget } from "../components/JoinRoomWidget";

export const Home: FC = () => {
  return (
    <div>
      <H1>Welcome home</H1>
      <CreateRoomForm />
      <div className="my-8"> 
        <p>Or hop into a room</p>
        <JoinRoomWidget /> 
      </div>
    </div>
  );
};
