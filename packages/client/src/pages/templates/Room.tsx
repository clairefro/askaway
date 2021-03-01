import React, { FC, useEffect, useState } from "react";
import type { RouteComponentProps } from "react-router-dom";
import { H1 } from "../../components/blocks/H1";
import { useAppContext } from "../../context/AppContext";
import { Question } from "../../components/Question";
import { CreateQuestionForm } from "../../components/blocks/forms/CreateQuestionForm";

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

  const { questions, title } = room;

  return (
    <div>
      <H1>{title}</H1>
      {questions.map((q) => (
        <Question data={q} key={q._id} />
      ))}
      
      {/* TODO: add username alias in app context */}
      <CreateQuestionForm roomId={room._id} username="TODO"  />
    </div>
  );
};
