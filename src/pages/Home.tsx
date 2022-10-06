import React from 'react';
import { Container } from 'components/Container';
import { Banner } from 'components/Banner';
import { useTrendingWeek } from 'hooks/useTrending';

export const Home: React.FC = (): JSX.Element => {
  const { data: trendingWeek } = useTrendingWeek();

  return (
    <Container>
      {trendingWeek && <Banner items={trendingWeek.results} />}
    </Container>
  );
};
