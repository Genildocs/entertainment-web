'use client';
import Category from '../components/Category';
import InputSearch from '../components/InputSearch';

export default function TvSeries() {
  return (
    <div>
      <InputSearch placeholder="Search for TV series" category="TV Series" />
      <Category category="TV Series" />
    </div>
  );
}
