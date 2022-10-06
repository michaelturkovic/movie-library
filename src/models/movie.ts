export interface Movie {
  id: number;
  poster_path: string;
  backdrop_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  original_title: string;
  title: string;
  original_language: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}
