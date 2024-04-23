import { zodResolver } from "@hookform/resolvers/zod";
import { Select, SelectItem } from "@nextui-org/select";
import { useForm } from "react-hook-form";
import { ZodType } from "zod";

type SelectFieldProps = {
  label: string;
  schema: ZodType;
  id: string;
};

export const SelectField = (props: SelectFieldProps) => {
  const { label, schema, id } = props;
  const animals = [
    { label: "Dog", value: "dog" },
    { label: "Cat", value: "cat" },
    { label: "Tiger", value: "tiger" },
  ];
  const methods = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <div>
      <label>{label}</label>
      <Select placeholder='Select an animal' {...methods.register(id)}>
        {animals.map((animal) => (
          <SelectItem key={animal.value} value={animal.value}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
