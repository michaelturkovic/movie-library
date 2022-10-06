import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useSwiper } from 'swiper/react';
import { Button } from 'components/Button';

export const BannerNavigation: React.FC = (): JSX.Element => {
  const swiper = useSwiper();

  return (
    <div className="flex pt-5">
      <Button
        className="border rounded-full w-8 h-8 flex justify-center items-center bg-white bg-opacity-70 backdrop-blur-lg"
        onClick={() => swiper.slidePrev()}
      >
        <FiChevronLeft className="w-4 h-4" />
      </Button>
      <Button
        className="border rounded-full w-8 h-8 flex justify-center items-center ml-5 bg-white bg-opacity-70 backdrop-blur-lg"
        onClick={() => swiper.slideNext()}
      >
        <FiChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
};
