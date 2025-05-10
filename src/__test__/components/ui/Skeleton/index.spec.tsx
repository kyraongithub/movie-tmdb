import { render } from '@testing-library/react';
import Skeleton from '../../../../components/ui/Skeleton';

describe('Skeleton', () => {
  it('render Skeleton component', () => {
    const { container } = render(<Skeleton width={200} height={300} />);
    expect(container).toMatchSnapshot();
  });
});
