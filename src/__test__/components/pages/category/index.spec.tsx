import { render } from '@testing-library/react';
import Categorypage from '../../../../components/pages/category';

describe('Category', () => {
  it('render Category component', () => {
    const { container } = render(<Categorypage />);
    expect(container).toMatchSnapshot();
  });
});
