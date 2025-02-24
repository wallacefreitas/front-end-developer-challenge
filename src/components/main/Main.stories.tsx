import { Meta, StoryFn } from "@storybook/react";
import { Main } from "./index";

export default {
  title: "Components/Main",
  component: Main,
} as Meta;

const Template: StoryFn = (args) => (
  <Main {...{ children: <div>Main Content</div>, ...args }} />
);

export const Default = Template.bind({});
Default.args = {
  children: <div>Main Content</div>,
};
