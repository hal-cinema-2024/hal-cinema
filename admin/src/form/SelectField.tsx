import { Select, SelectItem } from "@nextui-org/react";
import { useFormContext } from "react-hook-form";
type InputFieldProps = {
  fieldName: string;
  label: string;
  option: Option[];
};

type Option = {
  value: string;
  label: string;
};
export const SelectField = (props: InputFieldProps) => {
  const { fieldName, label, option } = props;
  const { register, formState } = useFormContext();

  return (
    <>
      <label htmlFor={fieldName}>{label}</label>
      <Select {...register(fieldName)}>
        {option.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </Select>
      {formState.errors[fieldName] && (
        <span>{formState.errors[fieldName]!.message as string}</span>
      )}
    </>
  );
};
