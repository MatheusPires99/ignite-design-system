import { ComponentProps } from "react";

import { styled } from "./styles";

export const Button = styled("button", {
  fontFamily: "$default",
  fontWeight: "bold",
  color: "$white",
  background: "$ignite300",
  borderRadius: "$md",
  height: "$10",
  border: 0,

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: "$2 $4",
      },

      big: {
        fontSize: 16,
        padding: "$3 $6",
      },
    },
  },

  defaultVariants: {
    size: "small",
  },
});

export type ButtonProps = ComponentProps<typeof Button>;