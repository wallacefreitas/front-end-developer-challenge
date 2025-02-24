import React from "react";
import { Meta, Story } from "@storybook/react";
import { ScoreCard } from "./index";

export default {
  title: "Components/ScoreCard",
  component: ScoreCard.Root,
} as Meta;

const Template: Story = (args) => (
  <ScoreCard.Root>
    <ScoreCard.Content {...args} />
  </ScoreCard.Root>
);

export const Default = Template.bind({});
Default.args = {
  children: <div>Spent Points</div>,
};
