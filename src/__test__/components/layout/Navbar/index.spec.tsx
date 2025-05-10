import { render } from '@testing-library/react';
import Navbar from '../../../../components/layout/navbar/Navbar';

describe('Navbar', () => {
  it('render Navbar component', () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
