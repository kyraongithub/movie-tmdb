import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../../../components/ui/Button';

describe('Button', () => {
  it('renders Button component', () => {
    const { container } = render(<Button>Button</Button>);
    expect(container).toMatchSnapshot();
  });

  it('renders with correct text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click Me');
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when passed', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('renders with given className', () => {
    const { container } = render(<Button className="custom-btn">Btn</Button>);
    expect(container.firstChild).toHaveClass('custom-btn');
  });
});
