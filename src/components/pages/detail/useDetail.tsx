import { useCallback } from 'react';
import { getMovie } from './helper';
import { useQuery } from '@tanstack/react-query';

const useDetail = (id: number) => {
  const getMovieDetail = useCallback(async () => getMovie(id), [id]);

  const detailMovie = useQuery({
    queryKey: ['movieDetail', id],
    queryFn: getMovieDetail,
  });

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };
  return {
    detailMovie: detailMovie.data,
    isLoading: detailMovie.isLoading,
    formatRuntime,
  };
};

export default useDetail;
