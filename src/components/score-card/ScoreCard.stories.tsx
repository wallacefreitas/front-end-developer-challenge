import { Meta, StoryFn } from "@storybook/react";
import { ScoreCard } from "./index";

export default {
  title: "Components/ScoreCard",
  component: ScoreCard.Root,
} as Meta;

const Template: StoryFn = (args) => (
  <ScoreCard.Root>
    <ScoreCard.Content {...args}>{args.children}</ScoreCard.Content>
  </ScoreCard.Root>
);

export const Default = Template.bind({});
Default.args = {
  children: <div>Spent Points</div>,
};
