import type { SelectPropsInterface } from './Select.interface';

const Select = (props: SelectPropsInterface) => {
  const { options, value, onChange } = props;

  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((option, key) => (
        <option key={key} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
