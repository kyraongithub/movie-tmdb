import type { ButtonPropsInterface } from './Button.interface';

const Button = (props: ButtonPropsInterface) => {
  return (
    <button className="btn cursor-pointer" {...props}>
      {props.children}
    </button>
  );
};

export default Button;
