import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'default',
    },
    onClick: { action: 'default clicked' },
    variant: {
      defaultValue: 'primary',
    },
    outlined: {
      defaultValue: false,
    },
    size: {
      defaultValue: '1',
    },
  },
  //   parameters: {
  //     controls: { expanded: true },
  //   },
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const primary = Template.bind({});
export const Secondary = Template.bind({});
export const disabled = Template.bind({});
export const primaryOutlined = Template.bind({});
disabled.args = {
  variant: 'gray',
  children: 'gray',
  onClick: () => {},
};
primaryOutlined.args = {
  variant: 'primary',
  outlined: true,
  children: 'primary outlined',
  onClick: action('gray clicked'),
};

Secondary.args = {
  variant: 'secondary',
  children: 'secondary',

  onClick: action('secondary clicked'),
};

// Default.args = {};
