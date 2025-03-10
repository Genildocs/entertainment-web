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
    <div className="relative w-[240px] lg:w-[470px] h-[140px] lg:h-[240px]">
      {image && (
        <Image
          src={`/images/${image.replace('./assets/', '')}`}
          alt={`image-${index}`}
          fill
          priority={true}
          className="object-cover "
        />
      )}
    </div>
  );
}
