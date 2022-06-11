import type { NextPage } from 'next';
import { useQuery } from 'react-query';
import Layout from '../components/layout/Layout';
import styles from '../styles/shop/Shop.module.css';
import getAllProducts from '../services/react-query/api.service';
import { useEffect, useState } from 'react';
import ShopFilters from '../components/shop-filters/ShopFilters';

const Shop: NextPage = () => {
    const { isLoading, isError, isSuccess, data: response } = useQuery("allProducts", getAllProducts );
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        if(isSuccess) setProducts(response.data);
    },[products]);

    const handleClick = ()=> {
        //
    };

    return (
        <Layout 
            metaDescription="All natural tinctures, salves and herbal remedies" 
            pageTitle="Root to Rise Botanicals">
            <section className={styles.pageContainer}>
                <ShopFilters onClick={handleClick}/>
            </section>
        </Layout>
    );
};

export default Shop;
