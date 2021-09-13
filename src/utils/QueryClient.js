import {QueryClient, QueryClientProvider} from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {refetchOnWindowFocus: false, refetchOnMount: false,},
  },
});

export const QueryProvider = ({children}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
