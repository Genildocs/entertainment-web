'use client';
import { useEffect, useState } from 'react';
import { data } from '../data';
import { GoDotFill } from 'react-icons/go';
import Image from 'next/image';
import { CategoryItem, CategoryProps } from '../interfaces';
export default function Category({ category, searchInput }: CategoryProps) {
  const [date, setDate] = useState<CategoryItem[]>(data);
  const [isCategory, setIsCategory] = useState<CategoryItem[]>([]);

  useEffect(() => {
    if (searchInput.length > 0) {
      setIsCategory(searchInput);
    }
  }, [isCategory, searchInput]);

  useEffect(() => {
    const handleCategory = () => {
      try {
        const filterCategory = date.filter(
          (item) => item.category === category
        );
        setIsCategory(filterCategory);
      } catch (error) {
        console.log(error);
      }
    };

    handleCategory();
  }, [category, date]);

  return (
    <div className="px-3 mt-7">
      <div className="mb-7">
        {searchInput.length > 0 ? (
          <p className="text-white text-lg ">{`Found ${searchInput.length} results`}</p>
        ) : (
          <h1 className="text-white text-lg ">{category}</h1>
        )}
      </div>
      <div className="isMobile sm:isTablet md:isDesktop gap-5 ">
        {isCategory.length > 0 &&
          isCategory.map((category: any) => (
            <div key={category.title}>
              <div>
                <Image
                  src={`${category.thumbnail.regular.small}`}
                  alt={category.title}
                  layout="fill"
                  sizes="auto"
                  className="rounded-md w-full isSmallDevice !static"
                />
                <Image
                  src={`${category.thumbnail.regular.medium}`}
                  alt={category.title}
                  layout="fill"
                  sizes="auto"
                  className="rounded-md w-full isMediumDevice !static"
                />
                <Image
                  src={`${category.thumbnail.regular.large}`}
                  alt={category.title}
                  layout="fill"
                  sizes="auto"
                  className="rounded-md w-full isLargeDevice !static"
                />
              </div>
              <div className="mt-3">
                <div className="flex items-center gap-2 text-white opacity-80">
                  <p>{category.year}</p>
                  <GoDotFill />
                  <p>{category.category}</p>
                  <GoDotFill />
                  <p>{category.rating}</p>
                </div>
                <h1 className="text-white text-lg">{category.title}</h1>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
