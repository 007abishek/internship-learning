import Input from "../components/Input";

export default {
  title: "Components/Input",
  component: Input,
};

export const Empty = {
  args:{
    placeholder:"Enter your name",
    value:"abishek",
    disabled:false,
  },
};

export const Filled = {
  args:{
    placeholder:"Enter your name",
    value:"Abhishek",
    disabled:true,
  },
};

export const Disabled = {
  args:{
    placeholder:"Enter your name",
    value:"abishek",
    disabled:false,
  },
};
