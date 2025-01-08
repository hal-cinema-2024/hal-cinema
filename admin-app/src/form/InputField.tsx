import { Input } from "@yamada-ui/react";
import { useFormContext } from "react-hook-form";

export const InputField = (props: React.ComponentProps<"input">) => {
  const { name, type } = props;
  const { register, formState } = useFormContext();

  return (
    <>
      <label htmlFor={name}>{name}</label>
      <Input type={type || "text"} {...register(name as string)} />
      {formState.errors[name as string] && (
        <span>{formState.errors[name as string]!.message as string}</span>
      )}
    </>
  );
};
