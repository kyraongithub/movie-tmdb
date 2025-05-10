import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import Homepage from '../../../../components/pages/home';

describe('Homepage', () => {
  it('renders Homepage component', () => {
    const queryClient = new QueryClient();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Homepage />
        </MemoryRouter>
      </QueryClientProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
