import { Select, SelectItem } from "@nextui-org/select";
import { FieldValues, useFormContext } from "react-hook-form";

type InputFieldProps = {
  id: string;
  label: string;
  options: option[];
};

type option = {
  label: string;
  value: string;
};
export const SelectField = (props: InputFieldProps) => {
  const { id, label, options } = props;
  const data = useFormContext();
  return (
    <>
      <Select label={label} {...data.register(id as FieldValues[typeof id])}>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
    </>
  );
};
