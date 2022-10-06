import { Movie } from './movie';
import { TvShow } from './tv-show';

export type MediaType = 'tv' | 'movie';

export interface ListItem extends Movie, TvShow {
  media_type: MediaType;
}

// Trending
export interface ListResponse {
  page: number;
  results: ListItem[];
  total_pages: number;
  total_results: number;
}
