import React from 'react';
import clsx from 'clsx';
import { PropsWithClassName } from 'types';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithClassName &
  React.PropsWithChildren & {};

export const Button: React.FC<Props> = ({ className, children, ...props }) => (
  <button
    {...props}
    className={clsx(
      'focus:outline-none hover:opacity-70 disabled:opacity-50',
      className
    )}
  >
    {children}
  </button>
);
