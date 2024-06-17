"use client";
import { useSearch } from "../context/SearchContext";
import BtnBookmarked from "./BtnBookmarked";
export default function Recommended() {
  const { data } = useSearch();
  return (
    <div className="pl-3">
      <span className="text-white text-lg ">Recommended for you</span>
      <div></div>
    </div>
  );
}
