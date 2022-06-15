import type { NextPage } from 'next';
import { useQuery } from 'react-query';
import Layout from '../../components/layout/Layout';
import styles from '../../styles/shop/Shop.module.css';
import getAllProducts from '../../services/react-query/api.service';
import { useEffect, useState } from 'react';
import ShopFilters from '../../components/shop-filters/ShopFilters';
import { ProductCard } from '../../components/product-card/ProductCard';
import ProductDto from '../../dto/ProductDto';

const Shop: NextPage = () => {
    const { isLoading, isError, isSuccess, data: response } = useQuery("allProducts", getAllProducts );
    const [products, setProducts] = useState<ProductDto[]>([]);
    const [isAnimated,setIsAnimated] = useState<boolean>(true);

    useEffect(()=> {
        if(isSuccess) setProducts(response.data);
    },[response]);

    const handleClick = ()=> {
        //
    };

    return (
        <Layout 
            metaDescription="All natural tinctures, salves and herbal remedies" 
            pageTitle="Root to Rise Botanicals">
            <section className={styles.pageContainer}>
                <ShopFilters onClick={handleClick}/>
                <div 
                    className={`${styles.productsContainer} ${isAnimated ? styles.fadeIn : undefined}`} 
                    onAnimationEnd={()=>setIsAnimated(false)}>
                    {products.slice(0,7).map(product => {
                        return (
                            <div className={styles.cardContainer} key={product.productId}>
                                <ProductCard product={product} />
                            </div>);
                    })}
                </div>
            </section>
        </Layout>
    );
};

export default Shop;
