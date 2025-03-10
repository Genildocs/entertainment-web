import React, { useEffect } from 'react';
import useDataStore from '@/store/dataStore';
import Carousel from './Carousel';
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
          <div className="relative  flex gap-5">
            {displayedList.map((item, index) => (
              <div key={index} className="relative">
                <Carousel
                  image={item.thumbnail.trending?.large}
                  index={index}
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
              </div>
            ))}
          </div>
        ) : (
          <p>Carregando</p>
        )}
      </div>
    </div>
  );
}
