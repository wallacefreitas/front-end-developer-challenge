import React from "react";
import { Meta, Story } from "@storybook/react";
import { Connector } from "./index";

export default {
  title: "Components/Connector",
  component: Connector.Root,
} as Meta;

const Template: Story = (args) => (
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
