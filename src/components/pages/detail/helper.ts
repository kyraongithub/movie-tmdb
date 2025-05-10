import services from '../../../services/movies/service';

const getMovie = async (id: number) => {
  try {
    return await services.fetchMovieDetail(id.toString());
  } catch (err: Error | any) {
    throw Error(err);
  }
};

export { getMovie };
