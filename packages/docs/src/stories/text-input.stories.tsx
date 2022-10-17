import { Box, Text, TextInput, TextInputProps } from "@ignite-ui/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Form/TextInput",
  component: TextInput,
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: "flex", flexDirection: "column", gap: "$2" }}
      >
        <Text size="sm">Email address</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextInputProps>;

export const Default: StoryObj<TextInputProps> = {
  args: {
    placeholder: "Type your name",
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "cal.com/",
  },
};
