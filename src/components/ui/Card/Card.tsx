import type { CardPropsInterface } from './Card.interface';

const Card = (props: CardPropsInterface) => {
  const { movie, id, className = '' } = props;

  return (
    <div
      className={`cursor-pointer ${className}`}
      onClick={() => window.location.assign(`/detail/${id}`)}
    >
      {movie?.title}
    </div>
  );
};

export default Card;
