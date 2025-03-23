import { useEffect, useState } from 'react';
import getTmdb from '../api/tmdb';

type Trending = {
  id?: number;
  title?: string;
  year?: string;
  category?: string;
  isBookmarked?: boolean;
  isTrending?: boolean;
  image?: string;
};

export default function Home() {
  const [data, setData] = useState<Trending>({} as Trending);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTmdb();
        const { results } = response.data;
        setData(results);
      } catch (error) {
        console.error('Invalid request', error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return <div className="text-white">Home</div>;
}
