import React, { useEffect } from 'react';
import useDataStore from '@/store/dataStore';
import Image from 'next/image';
export default function Trending() {
  const { filterByTrending, displayedList, setFilterByTrending } =
    useDataStore();

  useEffect(() => {
    setFilterByTrending(!filterByTrending);
  }, []);

  console.log(filterByTrending);
  return (
    <div>
      <div className="px-4 py-3">
        <h2 className="text-2xl font-light tracking-[-0.31px]">Trending</h2>
      </div>
      <div>
        {filterByTrending ? (
          <div>
            {displayedList.map((item, index) => (
              <div key={index}>
                {item.thumbnail.trending && (
                  <Image
                    src={`/${item.thumbnail.trending.small}`}
                    alt="thumbnail"
                    width={240}
                    height={140}
                  />
                )}
                <p>{item.title}</p>
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
