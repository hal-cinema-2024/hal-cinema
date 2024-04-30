import { Select } from "@nextui-org/react";
import { useFormContext } from "react-hook-form";
type InputFieldProps = {
  fieldName: string;
  option: Option[];
};

type Option = {
  value: string;
  label: string;
};

export const InputField = (props: InputFieldProps) => {
  const { fieldName, option } = props;
  const { register } = useFormContext();

  return (
    <>
      <label htmlFor={fieldName}>{fieldName}</label>
      <Select {...register(fieldName)}>
        {option.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </Select>
    </>
  );
};
