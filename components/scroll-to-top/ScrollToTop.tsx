import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const ScrollToTop = ({children}:any) => {
    const { asPath } = useRouter();

    useEffect(()=> {
        window.scrollTo(0,0);
    },[asPath]);
    
    return (
        <>{children}</>
    );
};

export default ScrollToTop;