import { ButtonType, ButtonSize } from './theme';
import React, { FC, HTMLAttributes, ReactNode } from 'react';
export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'delete' | 'basic';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
}

export const Button: FC<Props> = ({
  size = 'sm',
  variant = 'basic',
  rounded = false,
  children,
  ...props
}) => {
  const classNames = `btn-default ${ButtonType[variant]} ${
    ButtonSize[size]
  }   ${rounded ? 'rounded-full' : ''}`;

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};

export default Button;
