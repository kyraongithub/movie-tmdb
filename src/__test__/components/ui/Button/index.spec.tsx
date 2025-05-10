import { render } from '@testing-library/react';
import Button from '../../../../components/ui/Button';

describe('Button', () => {
  it('render button component', () => {
    const { container } = render(<Button>Button</Button>);
    expect(container).toMatchSnapshot();
  });
});
