import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainLayout } from 'layouts';

export const Root: React.FC = (): JSX.Element => (
  <MainLayout>
    <Outlet />
  </MainLayout>
);
