import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../../../../components/ui/Input';

describe('Input', () => {
  it('renders Input component', () => {
    const { container } = render(<Input type="text" />);
    expect(container).toMatchSnapshot();
  });

  it('renders input with correct type and placeholder', () => {
    render(<Input type="email" placeholder="Enter your email" />);
    const input = screen.getByPlaceholderText('Enter your email');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'email');
  });

  it('calls onChange handler when typed', () => {
    const handleChange = vi.fn();
    render(<Input type="text" onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when passed', () => {
    render(<Input type="text" disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });
});
