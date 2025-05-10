import { render } from '@testing-library/react';
import ExplorePage from '../../../../components/pages/explore';

describe('Explore', () => {
  it('render Explore component', () => {
    const { container } = render(<ExplorePage />);
    expect(container).toMatchSnapshot();
  });
});
