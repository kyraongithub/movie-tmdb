import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getMovies } from './helper';
import { useInView } from 'react-intersection-observer';

const useExplore = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const initialQuery = params.get('query') || '';

  const [query, setquery] = useState<string>(initialQuery);
  const [keyword, setkeyword] = useState<string>(initialQuery);

  useEffect(() => {
    navigate(`?query=${query}`);
  }, [query, navigate]);

  const getMovielist = useCallback(
    async ({ pageParam = 1 }) => {
      const response = await getMovies(pageParam, query);
      return {
        data: response.data,
        total: response.total,
        nextPage: pageParam + 1,
        hasMore: pageParam < response.total,
      };
    },
    [query]
  );

  const {
    data: movieList,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['movielist', query],
    queryFn: getMovielist,
    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? lastPage.nextPage : undefined,
    initialPageParam: 1,
    enabled: query !== '',
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setquery(keyword);
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
    isLoading,
    query,
    keyword,
    setkeyword,
    handleSearch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    ref,
    allMovies,
  };
};

export default useExplore;
