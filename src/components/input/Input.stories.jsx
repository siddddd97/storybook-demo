import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    size: "small",
    label: "Small",
    helperText: "helpertext",
    variant: "outlined",
  },
};

export const Outlined = {
  args: {
    size: "small",
    label: "Filled-Small",
    // variant: "outlined",
    // helperText: "Helper text",
  },
};
export const Filled = {
  args: {
    size: "normal",
    label: "Outlined-Normal",
    variant: "filled",
  },
};
export const Standard = {
  args: {
    size: "large",
    label: "Standard",
    variant: "standard",
  },
};
