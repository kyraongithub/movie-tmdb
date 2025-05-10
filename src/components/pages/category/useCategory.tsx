import { useInfiniteQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { getMovies } from './helper';
import { useInView } from 'react-intersection-observer';

const useCategory = (category: string) => {
  const getMovieList = useCallback(
    async ({ pageParam = 1 }) => {
      const response = await getMovies(pageParam, category);
      return {
        data: response.data,
        total: response.total,
        nextPage: pageParam + 1,
        hasMore: pageParam < response.total,
      };
    },
    [category]
  );

  const {
    data: movieList,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['movieList', category],
    queryFn: getMovieList,
    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? lastPage.nextPage : undefined,
    initialPageParam: 1,
  });

  const formatCategoryName = (name: string | undefined) => {
    if (!name) return 'Now Playing';
    return name
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const { ref } = useInView({
    threshold: 0,
    onChange: (inView) => {
      if (inView && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
  });

  const allMovies = movieList?.pages.flatMap((page) => page.data) || [];

  return {
    allMovies,
    isLoading,
    formatCategoryName,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    ref,
  };
};

export default useCategory;
