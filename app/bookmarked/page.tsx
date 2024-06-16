'use client';
import InputSearch from '../components/InputSearch';
import Category from '../components/Category';

export default function Bookmarked() {
  return (
    <div>
      <InputSearch placeholder="Search for bookmarked shows" />
      <Category category="Bookmarked Movies" />
      <Category category="Bookmarked TV Series" />
    </div>
  );
}
