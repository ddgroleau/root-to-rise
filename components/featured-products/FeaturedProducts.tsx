/* eslint-disable indent */
import { useRouter } from 'next/router';
import React from 'react';
import Button from '../button/Button';
import ScrollAnimation from '../scroll-animation/ScrollAnimation';
import { FeaturedProductCard } from './FeaturedProductCard';
import styles from './FeaturedProducts.module.scss';

const FeaturedProducts = () => {
    type Product = {
        id: number;
        image: string;
        name: string;
    }

    const router = useRouter();
    
    const products:Product[] = [
        {
            id: 1,
            image: '/tummy-tamer.jpg',
            name: 'Tummy Tamer Tincture'
        },
        {
            id: 2,
            image: '/spring-snease.jpg',
            name: 'Spring SnEase'
        },
        {
            id: 3,
            image: '/ground-down.jpg',
            name: 'Ground Down Tincture'
        },
    ];

    const handleClick = () => {
        router.push("/shop");
    };

    return (
        <ScrollAnimation animationClass={styles.fadeIn} hiddenClass={styles.hidden}>
            <section className={styles.featuredProducts}>
                    <p className={styles.title}>Featured Products</p>
                    <div className={styles.productsContainer}>
                        { products.map(product=>{
                            return ( 
                                <FeaturedProductCard key={product.id} image={product.image} productName={product.name}/>
                            );
                        })}
                    </div>
                    <div>
                        <Button text="See More" onClick={handleClick}/>
                    </div>
            </section>
        </ScrollAnimation>
    );
};

export default FeaturedProducts;