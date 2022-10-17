import { Text, TextProps } from "@ignite-ui/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children: "Default Text",
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong Text",
    as: "strong",
  },
};
