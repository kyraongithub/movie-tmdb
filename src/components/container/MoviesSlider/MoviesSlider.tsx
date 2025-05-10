import type { MovieInterface } from '../../../interfaces/Movie.interface';
import Card from '../../ui/Card';
import LoaderSkeleton from '../../ui/Skeleton';
import type { SliderPropsInterface } from './Slider.interface';

const MoviesSlider = (props: SliderPropsInterface) => {
  const { movieList, link, isLoading, title } = props;

  if (isLoading) {
    return <LoaderSkeleton width={200} height={300} />;
  }

  return (
    <section className="w-full px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold  hover:text-primary transition-colors">
          <h1>{title}</h1>
        </h2>
        <a
          href={`/category/${link}`}
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          View All
        </a>
      </div>

      <div className="relative">
        <div className="flex overflow-x-scroll space-x-4 px-4 pb-4 scrollbar-hide">
          {movieList?.map((movie: MovieInterface) => (
            <Card
              key={movie.id}
              id={movie.id}
              movie={movie}
              className="min-w-[200px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoviesSlider;
