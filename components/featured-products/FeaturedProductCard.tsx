import Image from 'next/image';
import React from 'react';
import styles from './FeaturedProducts.module.scss';

type CardProps = {
    image:string;
    productName: string;
}

export const FeaturedProductCard = ({image, productName}:CardProps) => {
    return (
        <article className={styles.card}>
            <Image src={image} height={400} width={325} alt="Product Image"/>
            <p className={styles.productTitle}>{productName}</p>
        </article>
    );
};
