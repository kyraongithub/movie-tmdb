import { render } from '@testing-library/react';
import Footer from '../../../../components/layout/footer';

describe('Footer', () => {
  it('render Footer component', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
