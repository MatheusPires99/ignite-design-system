import {
  Box,
  Text,
  Checkbox,
  CheckboxProps,
} from "@matheuspires-ignite-ui/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  decorators: [
    (Story) => (
      <Box as="label" css={{ display: "flex", gap: "$2" }}>
        {Story()}
        <Text size="sm">Accept terms of use</Text>
      </Box>
    ),
  ],
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
