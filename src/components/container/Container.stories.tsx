import { Meta, StoryFn } from "@storybook/react";
import { Container } from "./index";

export default {
  title: "Components/Container",
  component: Container,
} as Meta;

const Template: StoryFn = (args) => (
  <Container {...args}>{args.children}</Container>
);

export const Default = Template.bind({});
Default.args = {
  children: <div>Container Content</div>,
};
