import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, Radio } from "@nextui-org/react";
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
    <>
      <label>{label}</label>
      <RadioGroup {...methods.register(id)}>
        {animals.map((animal) => (
          <Radio key={animal.value} value={animal.value}>
            {animal.label}
          </Radio>
        ))}
      </RadioGroup>
    </>
  );
};
