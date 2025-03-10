'use client';
import React from 'react';
import Image from 'next/image';

export default function Carousel({
  image,
  index,
}: {
  image: string | undefined;
  index: number;
}) {
  return (
    <div>
      {image && (
        <Image
          src={`/${image.replace('./assets/', './images/')}`}
          alt="thumbnail"
          width={240}
          height={140}
          priority={true}
        />
      )}
    </div>
  );
}
