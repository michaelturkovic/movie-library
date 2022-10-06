import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from 'routes';
import { GenreProvider } from 'context/GenreContext';

const queryClient = new QueryClient();

const App: React.FC = (): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <GenreProvider>
      <RouterProvider router={router} />
    </GenreProvider>
  </QueryClientProvider>
);

export default App;
