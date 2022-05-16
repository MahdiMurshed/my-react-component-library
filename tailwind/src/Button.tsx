import { ButtonType, ButtonSize } from './theme';
import React, { FC, HTMLAttributes, ReactNode } from 'react';
export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'delete' | 'basic' | 'disabled';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
  disabled?: boolean;
}

export const Button: FC<Props> = ({
  size = 'sm',
  variant = 'basic',
  rounded = false,
  children,
  disabled = false,
  ...props
}) => {
  const classNames = `btn-default ${ButtonType[variant]} ${
    ButtonSize[size]
  }   ${rounded ? 'rounded-full' : ''} ${
    !disabled &&
    'hover:-translate-y-1 mt-6 transition-transform duration-200 scale-[1.05]'
  }`;

  return (
    <button className={classNames} {...props} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
