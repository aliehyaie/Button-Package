import React from 'react';
import { Meta, StoryFn} from "@storybook/react";
import Button from './Button';
import {ButtonProps} from "./Button.types";

export default {
    title: 'Button',
    component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Button',
};

