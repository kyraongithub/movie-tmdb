import type { CardPropsInterface } from './Card.interface';

const Card = (props: CardPropsInterface) => {
  const { title } = props;
  return <div>{title}</div>;
};

export default Card;
