import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import ProductDto from '../../dto/ProductDto';
import { CartContext } from '../../pages/_app';
import SpecialChar from '../special-char/SpecialChar';
import styles from './CartIcon.module.css';

type CartIconProps = {
    iconDimension:number;
}

const CartIcon = ({iconDimension}:CartIconProps) => {
    const cartContext = useContext(CartContext);
    const [isAnimated,setIsAnimated] = useState(true);

    useEffect(()=> {
        setIsAnimated(true);
    },[cartContext]);

    return (
        <>
            {cartContext.cart.length > 0 ? 
                <div 
                    className={`${styles.cartSize} ${isAnimated ? styles.animate : ""}`}
                    onAnimationEnd={()=>setIsAnimated(false)}
                >
                    <SpecialChar>{cartContext.cart.length}</SpecialChar>
                </div> 
                : undefined }
            <Link href={"/cart"} passHref>
                <a>
                    <Image width={iconDimension} height={iconDimension} src="/icon-cart.svg" alt="Cart Icon."/>
                </a>
            </Link>
        </>
    );
};

export default CartIcon;