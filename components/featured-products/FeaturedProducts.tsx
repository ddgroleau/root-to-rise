import React from 'react';
import { FeaturedProductCard } from './FeaturedProductCard';
import styles from './FeaturedProducts.module.css';

const FeaturedProducts = () => {
    return (
        <section className={styles.featuredProducts}>
            <p className={styles.title}>Featured Products</p>
            <div className={styles.productsContainer}>
                <FeaturedProductCard image='/product_tummy-tamer.png' productName='Tummy Tamer Tincture'/>
                <FeaturedProductCard image='/product_dandy-bitters.png'  productName='Dandy Bitters' />
                <FeaturedProductCard image='/product_ground-down.png'  productName='Ground Down Tincture'/>
            </div>
        </section>
    );
};

export default FeaturedProducts;