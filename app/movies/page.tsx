'use client';
import Category from '../components/Category';
import InputSearch from '../components/InputSearch';

export default function Movies() {
  return (
    <div>
      <InputSearch placeholder="Search for movies" category="Movie" />
      <Category category="Movie" />
    </div>
  );
}
