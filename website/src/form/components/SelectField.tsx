import { Select, SelectItem } from "@nextui-org/select";
import { useFormContext } from "react-hook-form";

type InputFieldProps = {
  fieldName: string;
  label: string;
  options: option[];
};

type option = {
  label: string;
  value: string;
};
export const SelectField = (props: InputFieldProps) => {
  const { fieldName, label, options } = props;
  const { register } = useFormContext();
  return (
    <>
      <Select label={label} {...register(fieldName)}>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
    </>
  );
};
