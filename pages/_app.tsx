import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from 'react';
import ErrorBoundary from '../components/error-boundary/ErrorBoundary';
import ScrollToTop from '../components/scroll-to-top/ScrollToTop';

const  MyApp = ({ Component, pageProps }: AppProps) => {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <ErrorBoundary>
            <QueryClientProvider client={queryClient}>
                <ScrollToTop>
                    <Component {...pageProps} />
                    <ReactQueryDevtools initialIsOpen={false} />
                </ScrollToTop>
            </QueryClientProvider>
        </ErrorBoundary>
    );
};

export default MyApp;
