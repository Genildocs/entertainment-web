'use client';
import { useSearch } from '../context/SearchContext';
import {
  CarouselComponent,
  CarouselItemsDirective,
  CarouselItemDirective,
} from '@syncfusion/ej2-react-navigations';
import { registerLicense } from '@syncfusion/ej2-base';
const key: any = process.env.NEXT_PUBLIC_EJ2_LICENSE_KEY;
registerLicense(key);
export default function Trending() {
  const { data } = useSearch();
  return (
    <div className="pl-3 py-5">
      <span className="text-white text-lg ">Trending</span>
      <CarouselComponent></CarouselComponent>
    </div>
  );
}
