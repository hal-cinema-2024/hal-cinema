import { Input } from "@nextui-org/react";
import { useFormContext } from "react-hook-form";
type InputFieldProps = {
  fieldName: string;
};
export const InputField = (props: InputFieldProps) => {
  const { fieldName } = props;
  const { register } = useFormContext();
  return (
    <>
      <label htmlFor={fieldName}>{fieldName}</label>
      <Input {...register(fieldName)} />
    </>
  );
};
