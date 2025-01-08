import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@yamada-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { InputField } from "../../../components/InputField";
import { scheduleSchema } from "./scheduleSchema";
import { createSchedule } from "../api";

export function ScheduleForm() {
  const methods = useForm({
    resolver: zodResolver(scheduleSchema),
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => {
          createSchedule(data);
          window.location.reload();
        })}
      >
        <InputField name='movieId' />
        <InputField name='theater' />
        <InputField name='startTime' />
        <InputField name='endTime' />
        <InputField name='isAvailable' />

        <Button type='submit'>Submit</Button>
      </form>
    </FormProvider>
  );
}
