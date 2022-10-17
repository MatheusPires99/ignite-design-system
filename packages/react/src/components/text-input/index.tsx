import { ComponentProps } from "react";

import { TextInputContainer, Prefix, Input } from "./styles";

export type TextInputProps = ComponentProps<typeof Input> & {
  prefix?: string;
};

export const TextInput = ({ prefix, ...props }: TextInputProps) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  );
};
