import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const StripeLogo = () => {
    return (
        <Link href="https://stripe.com/" passHref>
            <Image 
                src="/stripe-powered-black.svg" 
                height={30} width={30} 
                alt="Powered by Stripe"
            />
        </Link>
    );
};

export default StripeLogo;