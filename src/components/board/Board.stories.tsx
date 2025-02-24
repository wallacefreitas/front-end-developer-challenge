import { Meta, StoryFn } from "@storybook/react";
import { Board } from "./index";

export default {
  title: "Components/Board",
  component: Board.Root,
} as Meta;

const Template: StoryFn = (args) => (
  <Board.Root>
    <Board.Header {...args.headerArgs} />
    <Board.Body {...args.bodyArgs} />
  </Board.Root>
);

export const Default = Template.bind({});
Default.args = {
  headerArgs: {
    children: <div>Board Header Content</div>,
  },
  bodyArgs: {
    children: <div>Board Body Content</div>,
  },
};
