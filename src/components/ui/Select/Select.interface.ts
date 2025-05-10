interface OptionInterface {
  value: string;
  label: string;
}

export interface SelectPropsInterface {
  options: OptionInterface[];
  value: string;
  onChange: (value: string) => void;
}
