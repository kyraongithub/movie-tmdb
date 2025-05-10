import type React from 'react';
import MoviesSlider from '../../container/MoviesSlider/MoviesSlider';
import useHome from './useHome';

const Homepage: React.FC = () => {
  const {
    movieListPlaying,
    isLoadingPlaying,
    movieListPopular,
    isLoadingPopular,
    movieListTopRated,
    isLoadingTopRated,
    movieListUpcoming,
    isLoadingUpcoming,
  } = useHome();

  return (
    <div>
      <MoviesSlider
        isLoading={isLoadingPlaying}
        movieList={movieListPlaying}
        link="now_playing"
        title="Now Playing"
      />
      <MoviesSlider
        isLoading={isLoadingPopular}
        movieList={movieListPopular}
        link="popular"
        title="Popular"
      />
      <MoviesSlider
        isLoading={isLoadingTopRated}
        movieList={movieListTopRated}
        link="top_rated"
        title="Top Rated"
      />
      <MoviesSlider
        isLoading={isLoadingUpcoming}
        movieList={movieListUpcoming}
        link="upcoming"
        title="Upcoming"
      />
    </div>
  );
};

export default Homepage;
