interface CategoryProps {
  category: string;
  searchInput: any;
}

interface CategoryItem {
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
