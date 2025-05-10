import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from '../navbar';
import Footer from '../footer';

const queryClient = new QueryClient();

function QueryClientProviderWrapper({ children }: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <>{children}</>
      <Footer />
    </QueryClientProvider>
  );
}

export default QueryClientProviderWrapper;
