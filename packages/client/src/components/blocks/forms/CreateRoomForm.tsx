import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { useAppContext } from "../../../context/AppContext";
import { Button } from "../Button";
import { Form } from "../Form";
import { Input } from "../Form/Input";
import type { CreateRoomInput } from "../../../daos/RoomDao";
import YR from "@hookform/resolvers/yup";
import * as schemas from "@askaway/common/validationSchemas";
import { FormErrorMsg } from "../Form/FormErrorMsg";
import { useHistory } from "react-router-dom";

// snowpack workaround
const yupResolver = YR.yupResolver;

export const CreateRoomForm: FC = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schemas.createRoomSchema),
  });
  const history = useHistory();
  const { roomDao } = useAppContext();

  const onSubmit = async (input: CreateRoomInput) => {
    try {
      const room = await roomDao.create(input);
      if (room) {
        history.push(`/rooms/${room._id}`);
      }
    } catch (e) {
      console.log(e);
      // TODO: toastify
      alert("Errored!");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Room title"
        name="title"
        placeholder="ex: AMA with Fullstack dev Cora!"
        ref={register()}
      />
      <FormErrorMsg message={errors.title?.message} />

      <Input
        label="Room secret for hosts"
        placeholder="ex: S3CR3T"
        name="host_secret"
        ref={register()}
      />
      <FormErrorMsg message={errors.host_secret?.message} />

      <Button type="submit">Create Room</Button>
    </Form>
  );
};

// <FormErrorMsg message={errors.title?.message} />
// <FormErrorMsg message={errors.host_secret?.message} />
