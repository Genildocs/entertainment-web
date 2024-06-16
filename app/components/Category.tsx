'use client';
import { useEffect, useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import Image from 'next/image';
import { CategoryItem, CategoryProps } from '../interfaces';
import BtnBookmarked from './BtnBookmarked';
import { useSearch } from '../context/SearchContext';

export default function Category({ category }: CategoryProps) {
  const [isCategory, setIsCategory] = useState<CategoryItem[]>([]);
  const { result, data } = useSearch();

  useEffect(() => {
    try {
      if (result.length !== 0) {
        const filterCategory = result.filter(
          (item) => item.category === category
        );
        setIsCategory(filterCategory);
      }
    } catch (error) {
      console.log(error);
    }
  }, [category, result]);

  useEffect(() => {
    const handleCategory = () => {
      try {
        const filterCategory = data.filter(
          (item) => item.category === category
        );
        setIsCategory(filterCategory);
      } catch (error) {
        console.log(error);
      }
    };

    handleCategory();
  }, [category, data]);

  return (
    <div className="px-3 mt-7">
      <div className="mb-7">
        {result.length > 0 ? (
          <p className="text-white text-lg ">{`Found ${result.length} results`}</p>
        ) : (
          <h1 className="text-white text-lg ">{category}</h1>
        )}
      </div>
      <div className="isMobile sm:isTablet md:isDesktop gap-5 ">
        {isCategory.length > 0 &&
          isCategory.map((category: any) => (
            <div key={category.title}>
              <div className="relative">
                <Image
                  src={`${category.thumbnail.regular.small}`}
                  alt={category.title}
                  fill
                  sizes="auto"
                  priority={true}
                  className="rounded-md w-full isSmallDevice !static autoSize"
                />
                <Image
                  src={`${category.thumbnail.regular.medium}`}
                  alt={category.title}
                  fill
                  sizes="auto"
                  priority={true}
                  className="rounded-md w-full isMediumDevice !static autoSize"
                />
                <Image
                  src={`${category.thumbnail.regular.large}`}
                  alt={category.title}
                  fill
                  sizes="auto"
                  priority={true}
                  className="rounded-md w-full isLargeDevice !static autoSize"
                />
                <BtnBookmarked />
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
