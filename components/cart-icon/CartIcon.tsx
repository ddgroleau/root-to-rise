import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './CartIcon.module.css';

type CartIconProps = {
    iconDimension:number;
}

const CartIcon = ({iconDimension}:CartIconProps) => {
    return (
        <Link href={"/coming-soon"} passHref>
            <a>
                <Image width={iconDimension} height={iconDimension} src="/icon-cart.svg" alt="Cart Icon."/>
            </a>
        </Link>
    );
};

export default CartIcon;