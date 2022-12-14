import React from 'react';
import { Header } from 'components/Header';

type Props = React.PropsWithChildren & {};

export const MainLayout: React.FC<Props> = ({ children }): JSX.Element => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <div className="py-5 px-2">{children}</div>
  </div>
);
