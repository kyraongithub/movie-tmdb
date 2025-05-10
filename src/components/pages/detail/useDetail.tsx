import { useCallback } from 'react';
import { getMovie } from './helper';
import { useQuery } from '@tanstack/react-query';

const useDetail = (id: number) => {
  const getMovieDetail = useCallback(async () => getMovie(id), [id]);

  const detailMovie = useQuery({
    queryKey: ['movieDetail', id],
    queryFn: getMovieDetail,
  });

  return {
    detailMovie: detailMovie.data,
    isLoading: detailMovie.isLoading,
  };
};

export default useDetail;
