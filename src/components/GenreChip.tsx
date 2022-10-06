import React from 'react';
import { Genre } from 'models/genre';

type Props = {
  genre: Genre;
};

export const GenreChip: React.FC<Props> = ({ genre }): JSX.Element => (
  <div className="py-1 px-2 text-xs bg-emerald-400 text-emerald-900 rounded-full">
    {genre.name}
  </div>
);
