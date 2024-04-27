import { Select, SelectItem } from "@nextui-org/select";
import { useFormContext } from "react-hook-form";

type option = {
  label: string;
  value: string;
};
export const TicketTypeField = () => {
  const data = useFormContext();
  const label = "Ticket Type";
  const options: option[] = [
    { label: "Regular", value: "regular" },
    { label: "VIP", value: "vip" },
    { label: "VVIP", value: "vvip" },
  ];
  return (
    <>
      <Select label={label} {...data.register("ticket_type")}>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
    </>
  );
};
