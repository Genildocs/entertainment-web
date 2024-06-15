"use client";
import { useReducer, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { data } from "../data";
import { input, Action, State } from "../interfaces";
const initialState: State = {
  date: [],
  search: "",
  empty: false,
  notFound: false,
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "search":
      return {
        ...state,
        search: action.payload,
      };
    case "isEmpty":
      return {
        ...state,
        empty: action.payload,
      };
    case "isNotFound":
      return {
        ...state,
        notFound: action.payload,
      };
    default:
      throw new Error("Invalid action");
  }
}
export default function InputSearch({ placeholder, searchInput }: input) {
  const [{ search, empty, notFound }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const date = data;

  const handleSearch = () => {
    if (search.trim() === "") {
      dispatch({ type: "isEmpty", payload: true });
      setInterval(() => dispatch({ type: "isEmpty", payload: false }), 5000);
      return;
    }

    const filterSearch = date.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

    searchInput(filterSearch);

    if (filterSearch.length === 0) {
      dispatch({ type: "isNotFound", payload: true });
      setInterval(() => dispatch({ type: "isNotFound", payload: false }), 5000);
    }

    dispatch({ type: "search", payload: "" });
  };

  return (
    <div className="pl-3 pt-5">
      <div className="flex items-center gap-5">
        <CiSearch
          className="fill-white w-5 h-5 cursor-pointer"
          onClick={handleSearch}
        />
        <input
          type="text"
          placeholder={placeholder}
          className="outline-none bg-transparent text-white w-full max-w-[250px] placeholder:text-md"
          value={search}
          onChange={(e) =>
            dispatch({ type: "search", payload: e.target.value })
          }
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
      </div>
      <div>{empty && <p className="text-red-500 text-sm">Empty field</p>}</div>
      <div>
        {notFound && <p className="text-red-500 text-sm">Search not found</p>}
      </div>
    </div>
  );
}
