import React, { useEffect } from 'react';
import useDataStore from '@/store/dataStore';
import Image from 'next/image';
import Carousel from './Carousel';
export default function Trending() {
  const { filterByTrending, displayedList, setFilterByTrending } =
    useDataStore();

  useEffect(() => {
    setFilterByTrending(!filterByTrending);
  }, []);

  return (
    <div>
      <div className="px-4 py-3">
        <h2 className="text-2xl font-light tracking-[-0.31px]">Trending</h2>
      </div>
      <div>
        {filterByTrending ? (
          <div className="flex">
            {displayedList.map((item, index) => (
              <div key={index}>
                <Carousel
                  image={item.thumbnail.trending?.large}
                  index={index}
                />
                <div>
                  <p>{item.year}</p>
                  <p>{item.category}</p>
                  <p>{item.rating}</p>
                  <p>{item.title}</p>
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
