import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import data from '../../public/data.json';

interface EntertainmentItem {
  category: string;
  isBookmarked: boolean;
  isTrending: boolean;
  rating: string;
  thumbnail: {
    regular: {
      large: string;
      medium: string;
      small: string;
    };
    trending?: {
      large: string;
      small: string;
    };
  };
  title: string;
  year: number;
}

// Posso utilizar essa interface para capturar os dados via input do usuario ou da api ja tipando as variaveis

// Tipagem do Zustand Store
interface EntertainmentStatus {
  entertainmentList: EntertainmentItem[]; // Dados originais (imutáveis)
  filteredList: EntertainmentItem[]; // Resultados da pesquisa
  displayedList: EntertainmentItem[]; // Lista final após todos os filtros

  searchQuery: string;
  filterByTrending: boolean;
  filterByBookmark: boolean;

  setSearchQuery: (query: string) => void;
  setFilterByTrending: (value: boolean) => void;
  setFilterByBookmark: (value: boolean) => void;
}

const useDataStore = create(
  immer<EntertainmentStatus>((set) => ({
    entertainmentList: [...data],
    filteredList: [...data],
    displayedList: [...data],
    searchQuery: '',
    filterByTrending: false,
    filterByBookmark: false,

    setSearchQuery: (query) =>
      set((state) => {
        if (!query) {
          state.searchQuery = '';
          state.filteredList = [...state.entertainmentList];
        } else {
          state.searchQuery = query;
          state.filteredList = state.entertainmentList.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
          );
        }
      }),

    setFilterByTrending: (enabled) =>
      set((state) => {
        state.filterByTrending = enabled;
        state.displayedList = enabled
          ? state.filteredList.filter((item) => item.isTrending)
          : [...state.filteredList];
      }),

    setFilterByBookmark: (enabled) =>
      set((state) => {
        state.filterByBookmark = enabled;
        state.displayedList = enabled
          ? state.filteredList.filter((item) => item.isBookmarked)
          : [...state.filteredList];
      }),
  }))
);

export default useDataStore;
