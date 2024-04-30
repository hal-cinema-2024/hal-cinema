import { Button } from "@nextui-org/react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileFormSchema } from "./profileSchema";
import { InputField } from "../InputField";

import { option } from "./genderOption";
import { SelectField } from "../SelectField";
export function ProfileFormProvider() {
  const methods = useForm({
    resolver: zodResolver(profileFormSchema),

    defaultValues: {
      name: "",
      phone_number: "",
      age: 0,
      gender: "2",
    },
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        {/* 各入力フィールドに異なる fieldName を渡します */}
        <InputField fieldName='name' />
        <InputField fieldName='phone_number' />
        <InputField fieldName='age' type='number' />
        <SelectField fieldName='gender' label='性別' option={option} />
        <Button type='submit'>Submit</Button>
      </form>
    </FormProvider>
  );
}
