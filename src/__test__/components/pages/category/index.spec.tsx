import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import CategoryPage from '../../../../components/pages/category';

describe('Category', () => {
  it('renders Category component', () => {
    const queryClient = new QueryClient();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/category/popular']}>
          <CategoryPage />
        </MemoryRouter>
      </QueryClientProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
