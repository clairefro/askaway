import React, { FC, useCallback, useEffect, useState } from "react";
import type { RouteComponentProps } from "react-router-dom";
import { H1 } from "../../components/blocks/H1";
import { useAppContext } from "../../context/AppContext";

interface MatchParams {
  id: string;
}

export const Room: FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [room, setRoom] = useState<Room | null>(null);
  const { roomDao } = useAppContext();
  const { id } = match.params;


  useEffect(() => {
    roomDao
      .findById(id)
      .then((room) => setRoom(room))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!room) {
    return <p>Room invalid or expired! :(</p>;
  }

  return (
    <div>
      <H1>{room.title}</H1>
      <p>This is a room, trust me</p>
    </div>
  );
};
