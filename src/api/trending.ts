import { client } from 'config/client';
import { ListResponse } from 'models';

export const getTrendingWeek = async (): Promise<ListResponse> => {
  const { data } = await client.get<ListResponse>(`/trending/all/week`);
  return data;
};
