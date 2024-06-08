'use client';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { data } from '../data';
interface input {
  placeholder: string;
  searchInput: any;
}
export default function InputSearch({ placeholder, searchInput }: input) {
  const [date, setDate] = useState(data);
  const [search, setSearch] = useState('');
  const [empty, setEmpty] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = () => {
    if (search.trim() === '') {
      setEmpty(true);
      setInterval(() => setEmpty(false), 5000);
      return;
    }

    const filterSearch = date.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

    searchInput(filterSearch);

    if (filterSearch.length === 0) {
      setNotFound(true);
      setInterval(() => setNotFound(false), 5000);
    }

    setSearch('');
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
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
      </div>
      <div>{empty && <p className="text-red-500 text-sm">Empty field</p>}</div>
      <div>
        {notFound && <p className="text-red-500 text-sm">Search not found</p>}
      </div>
    </div>
  );
}
