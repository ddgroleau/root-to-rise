import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { createContext, Dispatch, SetStateAction, useState } from 'react';
import ErrorBoundary from '../components/error-boundary/ErrorBoundary';
import ScrollToTop from '../components/scroll-to-top/ScrollToTop';
import ProductDto from '../dto/ProductDto';

export const CartContext = createContext({
    cart:[] as ProductDto[],
    setCart:(()=>{}) as Dispatch<SetStateAction<ProductDto[]>>
});

const  MyApp = ({ Component, pageProps }: AppProps) => {
    const [queryClient] = useState(() => new QueryClient());
    const [cart,setCart] = useState<ProductDto[]>([]);
    return (
        <ErrorBoundary>
            <QueryClientProvider client={queryClient}>
                <ScrollToTop>
                    <CartContext.Provider value={{cart:cart,setCart:setCart}}>
                        <Component {...pageProps} />
                    </CartContext.Provider>
                    <ReactQueryDevtools initialIsOpen={false} />
                </ScrollToTop>
            </QueryClientProvider>
        </ErrorBoundary>
    );
};

export default MyApp;
