import React, { useCallback, useMemo } from 'react';
import { FiCalendar, FiStar } from 'react-icons/fi';
import { useGenres } from 'hooks/useGenres';
import { Container } from '../Container';
import { ListItem, Genre } from 'models';
import { GenreChip } from 'components/GenreChip';

type Props = {
  item: ListItem;
};

export const BannerCard: React.FC<Props> = ({ item }): JSX.Element => {
  const { movieGenres, tvGenres } = useGenres();

  const findGenres = useCallback(
    (genres: Genre[]): Genre[] =>
      item.genre_ids
        .map((id) => {
          const genre = genres.find((x) => x.id === id);
          if (genre) return genre;
          return null;
        })
        .filter((x) => x !== null) as Genre[],
    [item.genre_ids]
  );

  const genres: Genre[] = useMemo(() => {
    return item.media_type === 'tv'
      ? findGenres(tvGenres)
      : findGenres(movieGenres);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, tvGenres, movieGenres]);

  return (
    <Container className="md:w-96 w-5/6 md:h-48 h-56 bg-white bg-opacity-70 backdrop-blur-lg rounded-3xl drop-shadow-lg flex flex-col py-2 justify-between">
      <div className="flex flex-col">
        <h4 className="text-lg tracking-wide font-semibold">
          {item.media_type === 'movie' ? item.title : item.name}
        </h4>
        <ul className="flex flex-wrap py-2">
          {genres.map((genre) => (
            <li key={genre.id} className="mr-2 last:mr-0 my-2">
              <GenreChip genre={genre} />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex">
        <div className="flex items-center">
          <FiCalendar className="w-4 h-4" />
          <p className="text-sm ml-2">
            {item.media_type === 'movie'
              ? item.release_date
              : item.first_air_date}
          </p>
        </div>
        <div className="flex items-center ml-5">
          <FiStar className="w-4 h-4" />
          <p className="text-sm ml-2">{item.vote_average.toFixed(2)}</p>
        </div>
      </div>
    </Container>
  );
};
