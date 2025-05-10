import { render } from '@testing-library/react';
import DetailPage from '../../../../components/pages/detail';

describe('Detail', () => {
  it('render Detail component', () => {
    const { container } = render(<DetailPage />);
    expect(container).toMatchSnapshot();
  });
});
