"use client";
import { useState } from "react";
import InputSearch from "../components/InputSearch";

export default function Bookmarked() {
  const [result, setResult] = useState([]);
  return (
    <div>
      <InputSearch
        placeholder="Search for bookmarked shows"
        searchInput={setResult}
      />
    </div>
  );
}
