import { Heading, HeadingProps } from "@matheuspires-ignite-ui/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Heading",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "2xl", "3xl", "4xl", "5xl", "6xl"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading",
    as: "h1",
  },
  parameters: {
    docs: {
      description: {
        story:
          "By default the heading is always an `h2` but we can change it with the `as` property",
      },
    },
  },
};
