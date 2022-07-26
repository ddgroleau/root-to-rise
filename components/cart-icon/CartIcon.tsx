import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ProductDto from '../../dto/ProductDto';
import styles from './CartIcon.module.css';

type CartIconProps = {
    iconDimension:number;
}

const CartIcon = ({iconDimension}:CartIconProps) => {
    const [cart, setCart] = useState<ProductDto[]>([]);

    useEffect(()=>{
        if (typeof window !== 'undefined') {
            const cartJson:string|null = localStorage.getItem("cart");
            if(cartJson) setCart(JSON.parse(cartJson));
            window.addEventListener('storage', () => {});
        }
    },[cart]);

    return (
        <>
            {cart && cart.length > 0 ? 
                <div className={styles.cartSize}><span>{cart.length}</span></div> 
                : undefined }
            <Link href={"/coming-soon"} passHref>
                <a>
                    <Image width={iconDimension} height={iconDimension} src="/icon-cart.svg" alt="Cart Icon."/>
                </a>
            </Link>
        </>
    );
};

export default CartIcon;