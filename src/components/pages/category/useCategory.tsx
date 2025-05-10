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

  const formatCategoryName = (name: string | undefined) => {
    if (!name) return 'Now Playing';
    return name
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return {
    movieList: movieList.data?.data,
    isLoading: movieList.isLoading,
    totalPages: movieList.data?.total,
    setpage,
    page,
    formatCategoryName,
  };
};

export default useCategory;
