import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import ExplorePage from '../../../../components/pages/explore';

describe('Explore', () => {
  it('renders Explore component', () => {
    const queryClient = new QueryClient();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/explore?q=test']}>
          <ExplorePage />
        </MemoryRouter>
      </QueryClientProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
