import { render } from '@testing-library/react';
import Homepage from '../../../../components/pages/home';

describe('Homepage', () => {
  it('render Homepage component', () => {
    const { container } = render(<Homepage />);
    expect(container).toMatchSnapshot();
  });
});
