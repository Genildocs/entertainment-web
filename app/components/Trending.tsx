"use client";
import { useSearch } from "../context/SearchContext";
import {
  CarouselComponent,
  CarouselItemsDirective,
  CarouselItemDirective,
} from "@syncfusion/ej2-react-navigations";
import { registerLicense } from "@syncfusion/ej2-base";
import { useEffect, useState } from "react";
import Image from "next/image";
const key: any = process.env.NEXT_PUBLIC_EJ2_LICENSE_KEY;
registerLicense(key);
export default function Trending() {
  const { data } = useSearch();
  const [trending, setTrending] = useState([]);
  console.log(trending);
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
        <CarouselComponent>
          <CarouselItemsDirective></CarouselItemsDirective>
        </CarouselComponent>
      </div>
    </div>
  );
}
