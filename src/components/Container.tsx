import React from 'react';
import clsx from 'clsx';
import { PropsWithClassName } from 'types';

type Props = React.PropsWithChildren & PropsWithClassName & {};

export const Container: React.FC<Props> = ({
  className,
  children,
}): JSX.Element => (
  <div className={clsx('px-4 sm:px-6 lg:px-8', className)}>{children}</div>
);
