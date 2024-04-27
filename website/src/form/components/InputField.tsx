import { useFormContext } from "react-hook-form";
type InputFieldProps = {
  id: string;
  label: string;
};
export const InputField = (props: InputFieldProps) => {
  const { register } = useFormContext();
  const { id, label } = props;

  return (
    <>
      <label>{label}</label>
      <input {...register(id as string)} />
    </>
  );
};
