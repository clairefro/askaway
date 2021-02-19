import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "./blocks/Button";
import { Input } from "./blocks/Form/Input";

export const JoinRoomWidget: FC = () => {
  const [roomId, setRoomId] = useState<string>("");
  const history = useHistory();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomId(e.target.value);
  };

  const navigateToRoom = () => {
    history.push(`/rooms/${roomId}`);
  };

  return (
    <div>
      <Input
        name="join-room-widget"
        label="Enter room id"
        onChange={onChange}
        hideLabel
        placeholder="Room ID"
      />
      <Button onClick={navigateToRoom}>Join!</Button>
    </div>
  );
};
