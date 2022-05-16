import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'basic button',
    },
    onClick: { action: 'basic button clicked' },
    variant: {
      defaultValue: 'basic',
    },
    size: {
      defaultValue: 'sm',
    },
    rounded: {
      defaultValue: false,
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const basic = Template.bind({});
export const primary = Template.bind({});
export const Secondary = Template.bind({});
export const Delete = Template.bind({});
export const Disabled = Template.bind({});

primary.args = {
  variant: 'primary',
  children: 'primary',
  onClick: action('primary clicked'),
};
basic.args = {
  variant: 'basic',
  children: 'basic',
  onClick: action('basic clicked'),
};
Delete.args = {
  variant: 'delete',
  children: 'Delete',
  onClick: action('Delete clicked'),
};

Secondary.args = {
  variant: 'secondary',
  children: 'secondary',

  onClick: action('secondary clicked'),
};
Disabled.args = {
  variant: 'disabled',
  children: 'Disabled',
  disabled: true,

  onClick: () => {},
};

// Default.args = {};
