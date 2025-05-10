import type { CardPropsInterface } from './Card.interface';

const Card = (props: CardPropsInterface) => {
  const { title, id } = props;
  return (
    <div
      className="cursor-pointer"
      onClick={() => window.location.assign(`/detail/${id}`)}
    >
      {title}
    </div>
  );
};

export default Card;
