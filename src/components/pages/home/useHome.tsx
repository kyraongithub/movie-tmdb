import { useQuery } from '@tanstack/react-query';
import { getMovies } from './helper';
import type { MovieInterface } from '../../../interfaces/Movie.interface';

const useMovieQuery = (category: string) => {
  return useQuery<{ data: MovieInterface[] }>({
    queryKey: ['movie', category],
    queryFn: () => getMovies(1, category),
  });
};

const useHome = () => {
  const nowPlaying = useMovieQuery('now_playing');
  const popular = useMovieQuery('popular');
  const topRated = useMovieQuery('top_rated');
  const upcoming = useMovieQuery('upcoming');

  return {
    movieListPlaying: nowPlaying.data?.data ?? [],
    isLoadingPlaying: nowPlaying.isLoading,
    movieListPopular: popular.data?.data ?? [],
    isLoadingPopular: popular.isLoading,
    movieListTopRated: topRated.data?.data ?? [],
    isLoadingTopRated: topRated.isLoading,
    movieListUpcoming: upcoming.data?.data ?? [],
    isLoadingUpcoming: upcoming.isLoading,
  };
};

export default useHome;
