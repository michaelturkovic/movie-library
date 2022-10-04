import React from 'react';
import clsx from 'clsx';
import { PropsWithClassName } from 'types';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithClassName &
  React.PropsWithChildren & {};

export const Button: React.FC<Props> = ({ className, children, ...props }) => (
  <button
    {...props}
    className={clsx('flex focus:outline-none hover:opacity-70 p-2', className)}
  >
    {children}
  </button>
);
