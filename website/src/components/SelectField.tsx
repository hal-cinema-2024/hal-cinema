import { NativeSelect } from "@yamada-ui/react";
import { useFormContext } from "react-hook-form";

type Option = {
  label: string;
  value: number;
};
type InputFieldProps = {
  fieldName: string;
  label: string;
  option: Option[];
};

export const SelectField = (props: InputFieldProps) => {
  const { fieldName, label, option } = props;
  const { register, formState } = useFormContext();

  return (
    <>
      <label htmlFor={fieldName}>{label}</label>
      <NativeSelect {...register(fieldName)}>
        {option.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </NativeSelect>
      {formState.errors[fieldName] && (
        <span>{formState.errors[fieldName]!.message as string}</span>
      )}
    </>
  );
};
