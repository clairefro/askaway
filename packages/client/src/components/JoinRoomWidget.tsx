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
    <div className="flex items-center">
      <Input
        name="join-room-widget"
        label="Enter room id"
        onChange={onChange}
        hideLabel
        placeholder="Room ID"
      />
      <Button className="mb-2" onClick={navigateToRoom}>
        
        Join!
      
      </Button>
    </div>
  );
};
