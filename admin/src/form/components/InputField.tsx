import { Input } from "@nextui-org/react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
type InputFieldProps = {
  fieldName: string;
  type?: string;
};

export const InputField = (props: InputFieldProps) => {
  const { fieldName, type } = props;
  const { register, formState } = useFormContext();

  // 数値フィールドの場合、入力値を数値に変換します。
  const registerOptions =
    fieldName === "age"
      ? {
          ...register(fieldName, {
            setValueAs: (value) => (value === "" ? undefined : parseInt(value)), // 入力値が空の場合、undefined を返します。
          }),
        }
      : register(fieldName);

  return (
    <SContainer>
      <SLabel htmlFor={fieldName}>{fieldName}</SLabel>
      <SInput type={type || "text"} {...registerOptions} />
      {formState.errors[fieldName] && (
        <Span>{formState.errors[fieldName]!.message as string}</Span>
      )}
    </SContainer>
  );
};

const SContainer = styled.div`
  margin: 10px 0;
  height: 100px;
  width: 220px;
`;
const Span = styled.span`
  color: red;
  font-size: 12px;
  display: block;
  margin-bottom: 20px;
`;

const SInput = styled(Input)`
  margin-bottom: 10px;
`;

const SLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
`;
