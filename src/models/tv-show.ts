export interface TvShow {
  id: number;
  poster_path: string;
  backdrop_path: string;
  popularity: number;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}
