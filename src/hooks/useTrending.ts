import { useQuery } from '@tanstack/react-query';
import { getTrendingWeek } from 'api/trending';
import { ListResponse } from 'models';

export const useTrendingWeek = () =>
  useQuery<ListResponse, Error>(['trending-week'], getTrendingWeek);
