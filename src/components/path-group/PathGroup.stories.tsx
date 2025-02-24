import { Meta, StoryFn } from "@storybook/react";
import { PathGroup } from "./index";

export default {
  title: "Components/PathGroup",
  component: PathGroup.Root,
} as Meta;

const Template: StoryFn = (args) => (
  <PathGroup.Root>
    <PathGroup.Section {...args.sectionArgs}>
      <PathGroup.SectionItem {...args.sectionItemArgs} />
    </PathGroup.Section>
  </PathGroup.Root>
);

export const Default = Template.bind({});
Default.args = {
  sectionArgs: {
    children: <div>PathGroup Section Content</div>,
  },
  sectionItemArgs: {
    children: <div>PathGroup Section Item Content</div>,
  },
};
