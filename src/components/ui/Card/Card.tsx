import type { CardPropsInterface } from './Card.interface';

const Card = (props: CardPropsInterface) => {
  const { movie, id, className = '' } = props;

  return (
    <div
      className={`cursor-pointer hover:scale-110 transition-all ${className}`}
      onClick={() => window.location.assign(`/detail/${id}`)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
        alt={movie?.title}
      />
      <div className="flex justify-between">
        <p>{movie?.title}</p>
        <p>⭐{movie?.vote_average.toFixed(1)}</p>
      </div>
    </div>
  );
};

export default Card;
