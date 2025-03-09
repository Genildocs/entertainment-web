'use client';
import React from 'react';
import Header from '@/components/Header';
import InputSearch from '@/components/InputSearch';
import useDataStore from '@/store/dataStore';
import Trending from '@/components/Trending';
export default function Home() {
  const { filteredList } = useDataStore();

  return (
    <div>
      <Header />
      <InputSearch title="Search for movies or TV series" />
      <Trending />
    </div>
  );
}
