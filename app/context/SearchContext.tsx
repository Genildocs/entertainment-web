"use client";
import { useContext } from "react";
import { createContext, useState } from "react";

interface SearchContextType {
  result: any[];
  setResult: React.Dispatch<React.SetStateAction<any[]>>;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

interface SearchProviderProps {
  children: React.ReactNode;
}

const SearchProvider = ({ children }: SearchProviderProps) => {
  const [result, setResult] = useState<any>([]);

  return (
    <SearchContext.Provider value={{ result, setResult }}>
      {children}
    </SearchContext.Provider>
  );
};

// function useSearch() {
//   const context = useContext(SearchContext);
//   return context;
// }

export default { SearchProvider, SearchContext };
