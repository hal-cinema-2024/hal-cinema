import { Button } from "@nextui-org/react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileFormSchema } from "./profileSchema";
import { InputField } from "../InputField";
import { SelectField } from "../components/SelectField";
import { option } from "./genderOption";
export function ProfileFormProvider() {
  const methods = useForm({ resolver: zodResolver(profileFormSchema) });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        {/* 各入力フィールドに異なる fieldName を渡します */}
        <InputField fieldName='name' />
        <InputField fieldName='phone_number' />
        <InputField fieldName='age' />
        <SelectField fieldName='gender' label='性別' options={option} />
        <Button type='submit'>Submit</Button>
      </form>
    </FormProvider>
  );
}
