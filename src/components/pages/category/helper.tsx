import services from '../../../services/movies/service';

const getMovies = async (page: number, category: string) => {
  try {
    return await services.fetchMovieList(page, category);
  } catch (err: Error | any) {
    throw Error(err);
  }
};

export { getMovies };
