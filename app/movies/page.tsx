'use client';
import { useState } from 'react';
import Category from '../components/Category';
import InputSearch from '../components/InputSearch';

export default function Movies() {
  const [result, setResult] = useState([]);

  return (
    <div>
      <InputSearch placeholder="Search for movies" searchInput={setResult} />
      <Category category="Movie" searchInput={result} />
    </div>
  );
}
