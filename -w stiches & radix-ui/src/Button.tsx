import React, { HTMLAttributes, ReactNode } from 'react';
import { styled } from './stitches.config';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'gray';
  outlined?: boolean;
  size?: '1' | '2';
}

//custom button
export const Button = ({ children, ...props }: Props) => {
  const Button = styled('button', {
    // mini reset
    appearance: 'none',
    border: 'none',
    backgroundColor: 'transparent',
    lineHeight: 1,
    borderRadius: '99999px',
    px: '$1',
    transition: 'all 0.3s',

    variants: {
      size: {
        1: {
          fontSize: '13px',
          height: '25px',
          '&:hover': {
            fontSize: '15px',
          },
        },
        2: {
          fontSize: '15px',
          height: '35px',
          '&:hover': {
            fontSize: '17px',
          },
        },
      },
      variant: {
        gray: {
          backgroundColor: '$gray400',
          '&:hover': {
            backgroundColor: '$gray500',
          },
        },
        primary: {
          backgroundColor: '$primary',
          color: 'white',
          '&:hover': {
            backgroundColor: '$primaryDark',
          },
        },
        secondary: {
          backgroundColor: '$secondary',
          color: 'white',
          '&:hover': {
            backgroundColor: '$secondaryDark',
          },
        },
      },
      outlined: {
        true: {
          $$shadowColor: 'transparent',
          backgroundColor: 'transparent',
          boxShadow: '0 0 0 1px $$shadowColor',
        },
      },
    },

    defaultVariants: {
      variant: 'primary',
      size: 1,
      outlined: false,
    },

    compoundVariants: [
      {
        variant: 'gray',
        outlined: true,
        css: {
          $$shadowColor: '$colors$gray400',
        },
      },
      {
        variant: 'primary',
        outlined: true,
        css: {
          $$shadowColor: '$colors$primary',
          color: '$primary',
          '&:hover': {
            color: 'white',
          },
        },
      },
      {
        variant: 'secondary',
        outlined: true,
        css: {
          $$shadowColor: '$colors$secondary',
          color: '$secondary',
          '&:hover': {
            color: 'white',
          },
        },
      },
    ],
  });

  return <Button {...props}>{children}</Button>;
};
