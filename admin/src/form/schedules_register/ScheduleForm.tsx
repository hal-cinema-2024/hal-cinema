import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@yamada-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { InputField } from "../InputField";
import { scheduleSchema } from "./scheduleSchema";

export function MovieForm() {
  const methods = useForm({
    resolver: zodResolver(scheduleSchema),
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => {
          window.location.reload();
        })}
      >
        {/* id: z.number({
    message: "IDは必須です",
  }),
  movieId: z.number({
    message: "映画IDは必須です",
  }),
  movieName: z.string({
    message: "映画名は必須です",
  }),
  theater: z.string({
    message: "シアター名は必須です",
  }),
  startTime: z.string({
    message: "開始時間は必須です",
  }),
  endTime: z.string({
    message: "終了時間は必須です",
  }),
  isAvailable: z.boolean({
    message: "予約可能かどうかは必須です",
  }), */}
        <InputField fieldName='id' type='number' />
        <InputField fieldName='movieId' type='number' />
        <InputField fieldName='movieName' />
        <InputField fieldName='theater' />
        <InputField fieldName='startTime' />
        <InputField fieldName='endTime' />
        <InputField fieldName='isAvailable' />

        <Button type='submit'>Submit</Button>
      </form>
    </FormProvider>
  );
}
