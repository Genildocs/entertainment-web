import React, { useEffect } from 'react';
import useDataStore from '@/store/dataStore';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from 'swiper/modules';
import 'swiper/css/bundle';
export default function Trending() {
  const { filterByTrending, displayedList, setFilterByTrending } =
    useDataStore();

  useEffect(() => {
    setFilterByTrending(true);
  }, []);

  console.log(filterByTrending);

  return (
    <div>
      <div className="py-4">
        <h2 className="text-2xl font-light tracking-[-0.31px]">Trending</h2>
      </div>
      <div>
        {filterByTrending ? (
          <Swiper
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              Autoplay,
              EffectFade,
            ]}
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}>
            {displayedList.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src={`/images/${item.thumbnail.regular.large.replace(
                    './assets/',
                    ''
                  )}`}
                />
                <div className="absolute bottom-0 grid grid-cols-3 px-4 pb-4 gap-x-5 ">
                  <p className="text-[12px] lg:text-sm font-normal">
                    {item.year}
                  </p>
                  <p className="text-[12px] lg:text-sm font-normal">
                    {item.category}
                  </p>
                  <p className="text-[12px] lg:text-sm font-normal">
                    {item.rating}
                  </p>
                  <p className="text-sm lg:text-2xl font-medium col-span-full">
                    {item.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>Carregando</p>
        )}
      </div>
    </div>
  );
}
