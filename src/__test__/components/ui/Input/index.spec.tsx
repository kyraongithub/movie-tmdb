import { render } from '@testing-library/react';
import Input from '../../../../components/ui/Input';

describe('Input', () => {
  it('render Input component', () => {
    const { container } = render(<Input type="text" />);
    expect(container).toMatchSnapshot();
  });
});
