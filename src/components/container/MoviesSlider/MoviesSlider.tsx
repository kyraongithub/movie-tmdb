import type { MovieInterface } from '../../../interfaces/Movie.interface';
import Card from '../../ui/Card';
import LoaderSkeleton from '../../ui/Skeleton';
import type { SliderPropsInterface } from './Slider.interface';

const MoviesSlider = (props: SliderPropsInterface) => {
  const { movieList, link, isLoading } = props;
  return (
    <>
      {isLoading ? (
        <LoaderSkeleton width={200} height={300} />
      ) : (
        <div>
          <h1>
            <a href={`/category/${link}`}>Now Playing {'>'}</a>
          </h1>
          {movieList?.map((movie: MovieInterface) => (
            <Card key={movie.id} id={movie.id} title={movie.title} />
          ))}
        </div>
      )}
    </>
  );
};

export default MoviesSlider;
