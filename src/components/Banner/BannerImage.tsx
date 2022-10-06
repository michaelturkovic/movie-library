import React from 'react';

type Props = {
  src: string;
  alt?: string;
};

export const BannerImage: React.FC<Props> = ({ src, alt }): JSX.Element => (
  <img
    className="rounded-3xl object-cover object-top w-full md:w-3/4 h-3/4 md:h-[450px]"
    src={src}
    alt={alt || ''}
  />
);
