'use client';
import React from 'react';
import InputSearch from '@/components/InputSearch';
import useDataStore from '@/store/dataStore';
import Trending from '@/components/Trending';

export default function Home() {
  const { filteredList } = useDataStore();
  return (
    <div className="px-4 lg:p-0 lg:max-w-[1240px] lg:mx-auto">
      <InputSearch title="Search for movies or TV series" />
      <Trending />
      <h3 className="text-[20px] py-4 tracking-[-0.31px] lg:text-3xl font-light lg:tracking-[-0.5px]">
        Recommended for you
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {filteredList.length > 0 ? (
          filteredList.map((list, index) => (
            <div key={index}>
              <div className="relative  overflow-hidden rounded-lg">
                <img
                  src={`/images/${list.thumbnail.regular.small.replace(
                    './assets/',
                    ''
                  )}`}
                  alt={list.title}
                />
              </div>
            </div>
          ))
        ) : (
          <div>
            <p>Carregando...</p>
          </div>
        )}
      </div>
    </div>
  );
}
