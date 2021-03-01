import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { useAppContext } from "../../../context/AppContext";
import { Button } from "../Button";
import { Form } from "../Form";
import { Input } from "../Form/Input";
import { FormErrorMsg } from "../Form/FormErrorMsg";
import type { CreateQuestionInput } from "../../../daos/QuestionDao";
import YR from "@hookform/resolvers/yup";
import * as schemas from "@askaway/common/validationSchemas";

// snowpack workaround
const yupResolver = YR.yupResolver;

interface Props {
  username?: string;
  roomId: string;
  onSuccess?: (question: Question) => void;
}
console.log({ schemas });
console.log(schemas.createQuestionSchema);
console.log(schemas.createRoomSchema);

export const CreateQuestionForm: FC<Props> = ({
  username = "Anonymous",
  roomId,
  onSuccess,
}) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schemas.createQuestionSchema),
  });

  const { questionDao } = useAppContext();

  const onSubmit = async (input: CreateQuestionInput) => {
    console.log("submitted");
    console.log({ input });
    try {
      const question = await questionDao.create({ ...input, username });
      if (onSuccess) {
        onSuccess(question);
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
        label="Question"
        name="message"
        hideLabel
        placeholder="Enter a question"
        ref={register()}
      />
      <FormErrorMsg message={errors.message?.message} />
      <Input
        label="Username"
        hideLabel
        hidden
        name="username"
        defaultValue={username}
        ref={register()}
      />
      <Input
        label="roomId"
        hideLabel
        hidden
        name="roomId"
        defaultValue={roomId}
        ref={register()}
      />

      <Button type="submit">Ask!</Button>
    </Form>
  );
};
