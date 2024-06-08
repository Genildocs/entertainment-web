'use client';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { data } from '../data';
interface input {
  placeholder: string;
}
export default function InputSearch({ placeholder }: input) {
  const [date, setDate] = useState(data);
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    const filterSearch = date.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
    console.log(filterSearch);
    if (filterSearch.length === 0 || search === '') {
      alert(`Busca nao encontrada: ${search}`);
    }
  };

  return (
    <div className="pl-3 pt-5">
      <div className="flex items-center gap-5">
        <CiSearch
          className="fill-white w-5 h-5 cursor-pointer"
          onClick={handleSearch}
        />
        <input
          type="text"
          placeholder={placeholder}
          className="outline-none bg-transparent text-white w-full max-w-[250px] placeholder:text-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
