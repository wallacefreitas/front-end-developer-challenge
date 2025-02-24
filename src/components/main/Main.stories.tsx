import React from "react";
import { Meta, Story } from "@storybook/react";
import { Main } from "./index";

export default {
  title: "Components/Main",
  component: Main,
} as Meta;

const Template: Story = (args) => <Main {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div>Main Content</div>,
};
