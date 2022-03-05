import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from ".";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Default: ComponentStory<typeof Button> = (args) => <Button {...args} />;
Default.args = { children: "Click me!" };

export const Raised: ComponentStory<typeof Button> = (args) => (
  <Button {...args} variant="raised" />
);
Raised.args = { ...Default.args };

export const Outline: ComponentStory<typeof Button> = (args) => (
  <Button {...args} variant="outline" />
);
Outline.args = { ...Default.args };
