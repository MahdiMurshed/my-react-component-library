import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  variant: 'primary' | 'secondary';
}

//custom button
export const Button = ({ children, variant = 'primary', ...props }: Props) => {
  return (
    <button
      {...props}
      style={{
        color: 'white',
        backgroundColor: variant === 'primary' ? '#4dabf7' : '#22b8cf',
        border: 'none',
        borderRadius: '9999px',
        padding: '10px',
        fontWeight: 'bold',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};
