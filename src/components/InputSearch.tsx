'use client';
import React, { use } from 'react';
import { motion } from 'motion/react';
import useDataStore from '@/store/dataStore';
import { TbWorldSearch } from 'react-icons/tb';
export default function InputSearch({ title }: { title: string }) {
  const { searchQuery, setSearchQuery } = useDataStore();

  return (
    <div className="flex items-center gap-2 mt-4 ">
      <TbWorldSearch className="opacity-50 size-6" />
      <input
        type="text"
        placeholder={title}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full max-w-[300px] px-2 py-1 bg-transparent outline-none placeholder:opacity-50 border-b border-transparent hover:border-design-5 focus:border-design-5 transition duration-300 ease-in-out"
      />
    </div>
  );
}
