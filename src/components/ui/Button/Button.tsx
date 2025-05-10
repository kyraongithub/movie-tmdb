import type { ButtonPropsInterface } from './Button.interface';

const Button = (props: ButtonPropsInterface) => {
  return <button {...props}>{props.children}</button>;
};

export default Button;
