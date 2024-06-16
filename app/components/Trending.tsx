'use client';
import { useSearch } from '../context/SearchContext';
export default function Trending() {
  const { data } = useSearch();
  return (
    <div className="pl-3 py-5">
      <span className="text-white text-lg ">Trending</span>
    </div>
  );
}
