import { render } from '@testing-library/react';
import MoviesSlider from '../../../../components/container/MoviesSlider/MoviesSlider';

describe('MoviesSlider', () => {
  it('render MoviesSlider component', () => {
    const props = {
      movieList: [],
      link: '',
      isLoading: false,
      title: '',
    };

    const { container } = render(<MoviesSlider {...props} />);
    expect(container).toMatchSnapshot();
  });
});
