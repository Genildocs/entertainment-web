'use client';
import React, { useEffect, useState } from 'react';
import InputSearch from './components/InputSearch';
import Recommended from './components/Recommended';
import Trending from './components/Trending';

export default function Home() {
  return (
    <div>
      <InputSearch placeholder="Search for movies or TV series" />
      <Trending />
      <Recommended />
    </div>
  );
}
