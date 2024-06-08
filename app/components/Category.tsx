'use client';
import { useEffect, useState } from 'react';
import { data } from '../data';
import { GoDotFill } from 'react-icons/go';
import Image from 'next/image';
import { useMediaQuery } from '@uidotdev/usehooks';

interface CategoryProps {
  category: string;
  searchInput: any;
}

interface CategoryItem {
  title: string;
  year: number;
  category: string;
  rating: string;
  thumbnail: {
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
}
export default function Category({ category, searchInput }: CategoryProps) {
  const [date, setDate] = useState<CategoryItem[]>(data);
  const [isCategory, setIsCategory] = useState<CategoryItem[]>([]);

  const isSmallDevice = useMediaQuery('only screen and (max-width : 640px)');
  const isMediumDevice = useMediaQuery(
    'only screen and (min-width : 640px) and (max-width :768px)'
  );
  const isLargeDevice = useMediaQuery('only screen and (min-width : 768px) ');

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

  const renderImage = (category: CategoryItem) => {
    if (isSmallDevice) {
      return (
        <Image
          src={`/${category.thumbnail.regular.small}`}
          alt={category.title}
          width={200}
          height={200}
          className="rounded-md w-full"
        />
      );
    }
    if (isMediumDevice) {
      return (
        <Image
          src={`/${category.thumbnail.regular.medium}`}
          alt={category.title}
          width={200}
          height={200}
          className="rounded-md w-full"
        />
      );
    }
    if (isLargeDevice) {
      return (
        <Image
          src={`/${category.thumbnail.regular.large}`}
          alt={category.title}
          width={200}
          height={200}
          className="rounded-md w-full"
        />
      );
    }
    return null;
  };

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
              <div>{renderImage(category)}</div>
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
