import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getMovies } from './helper';

const useExplore = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const initialQuery = params.get('query') || '';

  const [page, setpage] = useState<number>(1);
  const [query, setquery] = useState<string>(initialQuery);
  const [keyword, setkeyword] = useState<string>(initialQuery);

  useEffect(() => {
    navigate(`?query=${query}`);
  }, [query]);

  const getMovielist = useCallback(
    async () => getMovies(page, query),
    [page, query]
  );

  const movieList = useQuery({
    queryKey: ['movielist', page, query],
    queryFn: getMovielist,
  });

  return {
    movieList: movieList.data?.data,
    isLoading: movieList.isLoading,
    totalPages: movieList.data?.total,
    setpage,
    page,
    query,
    setquery,
    keyword,
    setkeyword,
  };
};

export default useExplore;
