'use client';
import React, { useEffect, useState } from 'react';
import { data } from './data';
import InputSearch from './components/InputSearch';
import Recommended from './components/Recommended';
import Trending from './components/Trending';

export default function Home() {
  const [result, setResult] = useState([]);
  return (
    <div>
      <InputSearch
        placeholder="Search for movies or TV series"
        searchInput={setResult}
      />
      <Trending />
      <Recommended />
    </div>
  );
}
