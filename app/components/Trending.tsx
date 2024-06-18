'use client';
import { useSearch } from '../context/SearchContext';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

export default function Trending() {
  const { data } = useSearch();
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const filterTrending = (items: any) => {
      return items.filter((item: any) => item.isTrending === true);
    };

    const isTrending = filterTrending(data);
    setTrending(isTrending);
  }, [data]);

  return (
    <div className="pl-3 py-5">
      <span className="text-white text-lg ">Trending</span>
      <div className="control-container">
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          {trending.map((size: any, index: number) => (
            <SwiperSlide key={index}>
              <Image
                src={size.thumbnail.trending.small}
                alt="trending"
                fill
                sizes="auto"
                priority={true}
                className="!relative autoSize rounded-md object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
