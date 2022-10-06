import { useMovieGenres, useTvGenres } from 'hooks/useGenres';
import { Genre } from 'models';
import React, { createContext } from 'react';

interface Default {
  movieGenres: Genre[];
  tvGenres: Genre[];
}

const defaultValue: Default = {
  movieGenres: [],
  tvGenres: [],
};

export const GenreContext = createContext(defaultValue);

type Props = React.PropsWithChildren & {};

export const GenreProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const { data: movie } = useMovieGenres();
  const { data: tv } = useTvGenres();

  return (
    <GenreContext.Provider
      value={{ movieGenres: movie?.genres || [], tvGenres: tv?.genres || [] }}
    >
      {children}
    </GenreContext.Provider>
  );
};
