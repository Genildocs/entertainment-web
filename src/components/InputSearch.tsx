'use client';
import React from 'react';
import useSearchStore from '@/store/searchStore';

export default function InputSearch() {
  const { query, setQuery } = useSearchStore();

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
