import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { getMovies } from './helper';

const useHome = () => {
  const [page, setpage] = useState<number>(1);
  const [category, setcategory] = useState<string>('now_playing');

  const getMovieList = useCallback(
    async () => getMovies(page, category),
    [page, category]
  );

  const movieList = useQuery({
    queryKey: ['movieList', page, category],
    queryFn: getMovieList,
  });

  return {
    movieList: movieList.data?.data,
    isLoading: movieList.isLoading,
    totalPages: movieList.data?.total,
    setpage,
    page,
    category,
    setcategory,
  };
};

export default useHome;
