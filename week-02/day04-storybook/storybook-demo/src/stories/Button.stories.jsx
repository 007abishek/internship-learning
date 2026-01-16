import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = {
  args:{
    label:"Click Me",
    disabled:true,
  },
};

export const Disabled = {
  args:{
    label:"hello world",
    disabled:false,
  },
};

export const Value = {
  args:{
    label:"value",
    disabled:false
  }
};

export const ClickHere = {
  args:{
    label:"click here",
    disabled:false
  }
};
