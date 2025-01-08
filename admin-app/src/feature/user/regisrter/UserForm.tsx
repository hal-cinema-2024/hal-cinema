import { Button } from "@yamada-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "../../../components/InputField";
import { userSchema } from "./UserSchema";
import { SelectField } from "../../../components/SelectField";
import { createUser } from "../api";

export function UserForm() {
  const methods = useForm({
    resolver: zodResolver(userSchema),
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => {
          createUser(data);
          window.location.reload();
        })}
      >
        <InputField name='firstName' />
        <InputField name='lastName' />
        <InputField name='firstNameReading' />
        <InputField name='lastNameReading' />
        {/* <InputField name='gender' type='number' /> */}
        <SelectField
          select={{
            name: "gender",
          }}
          option={[
            { value: "1", label: "男性" },
            { value: "2", label: "女性" },
            { value: "3", label: "その他" },
          ]}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </FormProvider>
  );
}
