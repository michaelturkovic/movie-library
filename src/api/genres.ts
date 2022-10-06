import { client } from 'config/client';
import { GenreList } from 'models';

export const getMovieGenres = async (): Promise<GenreList> => {
  const { data } = await client.get<GenreList>('/genre/movie/list');
  return data;
};

export const getTvGenres = async (): Promise<GenreList> => {
  const { data } = await client.get<GenreList>('/genre/tv/list');
  return data;
};
