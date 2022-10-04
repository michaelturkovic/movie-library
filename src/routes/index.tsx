import { createBrowserRouter } from 'react-router-dom';
import { Root } from './root';
import {
  Favorites,
  Home,
  MovieDetails,
  MoviesOverview,
  Search,
  TvOverview,
  TvDetails,
  ErrorPage,
} from 'pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'movies',
        children: [
          {
            index: true,
            element: <MoviesOverview />,
          },
          {
            path: ':id',
            element: <MovieDetails />,
          },
        ],
      },
      {
        path: 'tv',
        children: [
          {
            index: true,
            element: <TvOverview />,
          },
          {
            path: ':id',
            element: <TvDetails />,
          },
        ],
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
      {
        path: 'search',
        element: <Search />,
      },
    ],
  },
]);
