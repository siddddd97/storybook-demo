import React from 'react';
import TextBox from './TextBox';

export default {
  title: 'Components/TextBox',
  component: TextBox,
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: 'boolean',
    },
    grayBackground: {
      control: 'boolean',
    },
    purpleOutline: {
      control: 'boolean',
    },
  },
};

const Template = (args) => <TextBox {...args} />;

export const WideOption = Template.bind({});
WideOption.args = {
  width: true,
};

export const GrayBackground = Template.bind({});
GrayBackground.args = {
  grayBackground: true,
};

export const PurpleOutline = Template.bind({});
PurpleOutline.args = {
  purpleOutline: true,
};
