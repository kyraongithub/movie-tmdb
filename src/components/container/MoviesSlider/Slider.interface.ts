import type { MovieInterface } from '../../../interfaces/Movie.interface';

export interface SliderPropsInterface {
  movieList: MovieInterface[];
  link: string;
  isLoading: boolean;
  title: string;
}
