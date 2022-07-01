import { useRouter } from 'next/router';
import React from 'react';
import ProductDto from '../../dto/ProductDto';
import ImageWithFallback from '../image-with-fallback/ImageWithFallback';
import SpecialChar from '../special-char/SpecialChar';
import styles from './ProductCard.module.css';

type ProductCardProps = {
    product:ProductDto;
}

export const ProductCard = ({product}:ProductCardProps) => {
    const router = useRouter();

    return (
        <article className={styles.card} onClick={()=>router.push(`/shop/${product.productId}`)}>
            <ImageWithFallback 
                src={"/" + product.imagePath} 
                fallbackSrc="/product_tummy-tamer.png"
                height={400} 
                width={325} 
                alt="Product Image"
            />
            <p className={styles.productTitle}>{product.name}</p>
            <span className={styles.productPrice}>from <SpecialChar>$</SpecialChar>{product.price}</span>
        </article>
    );
};
