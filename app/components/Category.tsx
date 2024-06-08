'use client';
import { useEffect, useState } from 'react';
import { data } from '../data';
import Image from 'next/image';

interface CategoryProps {
  category: string;
}
export default function Category({ category }: CategoryProps) {
  const [date, setDate] = useState(data);
  const [isCategory, setIsCategory] = useState({} as any);
  console.log(date[0].thumbnail.regular.medium);
  useEffect(() => {
    const handleCategory = () => {
      const filterCategory = date.filter((item) => {
        return item.category === category;
      });

      setIsCategory(filterCategory);
    };

    handleCategory();
  }, [category, date]);

  return (
    <div className="pl-3 mt-7">
      <div className="mb-7">
        <h1 className="text-white text-lg ">{category}</h1>
      </div>
      <div className="flex flex-wrap gap-5 ">
        {isCategory.length > 0 &&
          isCategory.map((movie: any) => (
            <div key={movie.title}>
              <img src={movie.thumbnail.regular.large} alt="" />
              <h1 className="text-white text-lg">{movie.title}</h1>
            </div>
          ))}
      </div>
    </div>
  );
}
