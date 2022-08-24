import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
import ErrorBoundary from '../components/error-boundary/ErrorBoundary';
import ScrollToTop from '../components/scroll-to-top/ScrollToTop';
import CartProductDto from '../dto/CartProductDto';
import { SessionProvider } from "next-auth/react";

export const CartContext = createContext({
    cart:[] as CartProductDto[],
    setCart:(()=>{}) as Dispatch<SetStateAction<CartProductDto[]>>
});

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
    const [queryClient] = useState(() => new QueryClient());
    const [cart,setCart] = useState<CartProductDto[]>([]);

    useEffect(()=> {
        let cartJson:string|null = localStorage.getItem("cart");
        if(cartJson) setCart(JSON.parse(cartJson));
    },[]);

    return (
        <ErrorBoundary>
            <QueryClientProvider client={queryClient}>
                <ScrollToTop>
                    <SessionProvider session={session}>
                        <CartContext.Provider value={{cart:cart,setCart:setCart}}>
                            <Component {...pageProps} />
                        </CartContext.Provider>
                    </SessionProvider>
                    <ReactQueryDevtools initialIsOpen={false} />
                </ScrollToTop>
            </QueryClientProvider>
        </ErrorBoundary>
    );
};

export default MyApp;
