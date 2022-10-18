import { Avatar, AvatarProps } from "@matheuspires-ignite-ui/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Data Display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/MatheusPires99.png",
    alt: "Matheus Pires",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>;

export const Default: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
