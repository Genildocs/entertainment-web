'use client';
import React, { useEffect, useState } from 'react';
import { data } from './data';
import InputSearch from './components/InputSearch';

export default function Home() {
  return (
    <div>
      <InputSearch placeholder="Search for movies or TV series" />
    </div>
  );
}
