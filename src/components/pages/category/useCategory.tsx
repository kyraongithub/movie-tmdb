import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { getMovies } from './helper';

const useCategory = (category: string) => {
  const [page, setpage] = useState<number>(1);

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
  };
};

export default useCategory;
