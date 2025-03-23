import axios from 'axios';

const getTmdb = () =>
  axios({
    method: 'get',
    url: 'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API}`,
    },
  });

export default getTmdb;
