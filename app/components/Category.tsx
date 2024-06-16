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
      const filterCategory = (items: CategoryItem[]) => {
        return items.filter((item) => item.category === category);
      };

      const filteredData = filterCategory(data);
      const filteredResult = filterCategory(result);

      setIsCategory(filteredResult.length > 0 ? filteredResult : filteredData);
    } catch (error) {
      console.log(error);
    }
  }, [category, result, data]);

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
                {['small', 'medium', 'large'].map((size, index) => (
                  <Image
                    key={index}
                    src={`${category.thumbnail.regular[size]}`}
                    alt={category.title}
                    fill
                    sizes="auto"
                    priority={true}
                    className={`rounded-md w-full is${
                      size.charAt(0).toLocaleUpperCase() + size.slice(1)
                    }Device !static autoSize`}
                  />
                ))}
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
