import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getMovieGenres, getTvGenres } from 'api/genres';
import { GenreContext } from 'context/GenreContext';
import { GenreList } from 'models';

export const useMovieGenres = () =>
  useQuery<GenreList, Error>(['movie-genres'], getMovieGenres);

export const useTvGenres = () =>
  useQuery<GenreList, Error>(['tv-genres'], getTvGenres);

export const useGenres = () => useContext(GenreContext);
