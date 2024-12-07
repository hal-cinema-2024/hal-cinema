import { Input } from "@yamada-ui/react";
import { useFormContext } from "react-hook-form";

type InputFieldProps = {
  fieldName: string;
  type?: string;
};

export const InputField = (props: InputFieldProps) => {
  const { fieldName, type } = props;
  const { register, formState } = useFormContext();

  const registerOptions =
    fieldName === "age"
      ? {
          ...register(fieldName, {
            setValueAs: (value) => (value === "" ? undefined : parseInt(value)),
          }),
        }
      : register(fieldName);

  return (
    <>
      <label htmlFor={fieldName}>{fieldName}</label>
      <Input type={type || "text"} {...registerOptions} />
      {formState.errors[fieldName] && (
        <span>{formState.errors[fieldName]!.message as string}</span>
      )}
    </>
  );
};
