import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./index";

const meta = {
  title: "Components/Label",
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Label",
  },
};
