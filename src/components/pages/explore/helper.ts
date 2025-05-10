import services from '../../../services/movies/service';

const getMovies = async (page: number, query: string) => {
  try {
    return await services.searchMovies(page, query);
  } catch (err: Error | any) {
    throw Error(err);
  }
};

export { getMovies };
