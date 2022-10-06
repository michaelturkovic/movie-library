import React from 'react';
import { Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ListItem } from 'models';
import { Container } from '../Container';
import { BannerCard } from './BannerCard';
import { BannerImage } from './BannerImage';
import { apiConfig } from 'config/api';
import { BannerNavigation } from './BannerNavigation';

type Props = {
  items: ListItem[];
};

export const Banner: React.FC<Props> = ({ items }): JSX.Element => {
  return (
    <Container className="h-[400px] relative md:h-full">
      <Swiper
        slidesPerView={1}
        className="w-full h-full"
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        modules={[Keyboard]}
      >
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            className="md:relative flex justify-center"
          >
            <div className="absolute md:bottom-12 md:left-28 bottom-0 left-0 w-full ">
              <BannerCard item={item} />
              <BannerNavigation />
            </div>
            <BannerImage
              src={`${apiConfig.orginalImagePath}/${item.backdrop_path}`}
              alt={`Banner image ${item.name}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
