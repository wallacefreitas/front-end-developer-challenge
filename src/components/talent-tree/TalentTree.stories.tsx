import { Meta, StoryFn } from "@storybook/react";
import { TalentTree } from "./index";

export default {
  title: "Components/TalentTree",
  component: TalentTree.Root,
} as Meta;

const Template: StoryFn = (args) => (
  <TalentTree.Root>
    <TalentTree.Group {...args.groupArgs}>
      <TalentTree.Path {...args.pathArgs}>
        <TalentTree.Image {...args.imageArgs} />
      </TalentTree.Path>
    </TalentTree.Group>
  </TalentTree.Root>
);

export const Default = Template.bind({});
Default.args = {
  groupArgs: {
    children: <div>TalentTree Group Content</div>,
  },
  pathArgs: {
    children: <div>TalentTree Path Content</div>,
  },
  imageArgs: {
    src: "../../src/assets/images/boat.png",
    alt: "TalentTree Image",
  },
};
