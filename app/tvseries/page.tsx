"use client";
import { useState } from "react";
import Category from "../components/Category";
import InputSearch from "../components/InputSearch";

export default function TvSeries() {
  const [result, setResult] = useState([]);
  return (
    <div>
      <InputSearch placeholder="Search for TV series" searchInput={setResult} />
      <Category category="TV Series" searchInput={result} />
    </div>
  );
}
