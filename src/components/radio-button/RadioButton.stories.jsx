import React from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ["autodocs"],
  argTypes: {
    shape: {
      control: {
        type: 'radio',
        options: ['round', 'square'],
      },
    },
    multipleSelect: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
};

const RadioButtonTemplate = (args) => <RadioButton {...args} />;

export const Round = RadioButtonTemplate.bind({});
Round.args = {
  shape: 'round',
  multipleSelect: false,
  label: 'Round',
};

export const Square = RadioButtonTemplate.bind({});
Square.args = {
  shape: 'square',
  multipleSelect: false,
  label: 'Square',
};

export const MultipleSelect = () => (
  <div>
    <RadioButton shape="square" multipleSelect label="Option 1" />
    <RadioButton shape="square" multipleSelect label="Option 2" />
    <RadioButton shape="square" multipleSelect label="Option 3" />
    <RadioButton shape="square" multipleSelect label="Option 4" />
  </div>
);
