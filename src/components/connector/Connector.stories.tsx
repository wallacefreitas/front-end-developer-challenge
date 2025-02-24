import { Meta, StoryFn } from "@storybook/react";
import { Connector } from "./index";

export default {
  title: "Components/Connector",
  component: Connector.Root,
} as Meta;

const Template: StoryFn = (args) => (
  <Connector.Root>
    <Connector.Content {...args.contentArgs} />
  </Connector.Root>
);

export const Default = Template.bind({});
Default.args = {
  contentArgs: {
    children: <div>Connector Content</div>,
  },
};
