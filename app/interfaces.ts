export interface input {
  placeholder: string;
  searchInput: any;
}

export interface State {
  date: any[];
  search: string;
  empty: boolean;
  notFound: boolean;
}

export interface Action {
  type: any;
  payload: any;
}

export interface CategoryProps {
  category: string;
  searchInput: any;
}

export interface CategoryItem {
  title: string;
  year: number;
  category: string;
  rating: string;
  thumbnail: {
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
}
