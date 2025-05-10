import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import DetailPage from '../../../../components/pages/detail';

describe('Detail', () => {
  it('renders Detail component', () => {
    const queryClient = new QueryClient();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/detail/123']}>
          <DetailPage />
        </MemoryRouter>
      </QueryClientProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
