'use client';
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import { CategoryItem } from '../interfaces';
import { data } from '../data';
interface SearchContextType {
  result: CategoryItem[];
  data: CategoryItem[];
  setResult: Dispatch<SetStateAction<CategoryItem[]>>;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

interface SearchProviderProps {
  children: ReactNode;
}

const SearchProvider = ({ children }: SearchProviderProps) => {
  const [result, setResult] = useState<any>([]);

  return (
    <SearchContext.Provider value={{ result, setResult, data }}>
      {children}
    </SearchContext.Provider>
  );
};

function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}

export { SearchProvider, useSearch };
