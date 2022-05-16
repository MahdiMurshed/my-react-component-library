import React, { FC, HTMLAttributes, ReactNode } from 'react';
import './main.css';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Thing: FC<Props> = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-5/6 m-auto text-2xl text-center text-pink-700 uppercase bg-blue-300 shadow-xl rounded-3xl">
      {children || `the`}
    </div>
  );
};
