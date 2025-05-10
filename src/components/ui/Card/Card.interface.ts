import type { MovieInterface } from '../../../interfaces/Movie.interface';

export interface CardPropsInterface {
  movie: MovieInterface;
  id: number;
  className?: string;
}
