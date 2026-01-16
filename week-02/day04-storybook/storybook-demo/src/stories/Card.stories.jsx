import Card from "../components/Card";

export default {
  title: "Components/Card",
  component: Card,
};

export const Default = {
  args: {
    title: "Profile",
    description: "This is a simple card component.",
  },
};

export const LongText = {
  args: {
    title: "Profile",
    description:
      "This card contains a longer description to show how the layout behaves when text overflows.",
  },
};

export const ShortText = {
  args: {
    title: "Note",
    description: "Short description.",
  },
};

export const TestingStory = {
  args:{
    title:"today topic",
    description:"This is a learning platform"
  }
};

export const NewTesting = {
  args:{
    title:"today world",
    description:"nice , this is a good"
  }
};
