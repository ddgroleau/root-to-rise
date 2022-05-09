import type { NextPage } from 'next';
import BrandBulletin from '../components/brand-bulletin/BrandBulletin';
import FeaturedProducts from '../components/featured-products/FeaturedProducts';
import Hero from '../components/hero/Hero';
import Layout from '../components/layout/Layout';
import styles from '../styles/home/Home.module.css';

const Home: NextPage = () => {
    return (
        <Layout 
            metaDescription="All natural tinctures, salves and herbal remedies" 
            pageTitle="Root to Rise Botanicals">
            <div className={styles.pageContainer} >
                <Hero/>
                <FeaturedProducts />
                <BrandBulletin />
            </div>
        </Layout>
    );
};

export default Home;
