import { styled } from "./styles";

const Button = styled("button", {
  fontFamily: "$default",
  background: "$ignite500",
  borderRadius: "$md",
  padding: "$4",
  height: "$10",
});

export const App = () => {
  return <Button>Hello World</Button>;
};
