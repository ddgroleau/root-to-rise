import type { NextPage } from 'next';
import Button from '../components/button/Button';
import Layout from '../components/layout/Layout';
import styles from '../styles/home/Home.module.css';

const Home: NextPage = () => {
    return (
        <Layout metaDescription="All natural tinctures, salves and herbal remedies" pageTitle="Root to Rise Botanicals">
            <div className={styles.pageContainer} >
                <section className={styles.hero}>
                    <div className={styles.content}>
                        <h1>
                        Earth<span className="specialChar">'</span>s 
                        Approach to 
                        Self<span className="specialChar">-</span>Care
                        </h1>
                        <div className={styles.btnContainer}>
                            <Button text="Shop Now" onClick={()=>{}} />
                        </div>
                    </div>
                    <div className={styles.imgContainer}>
                        <div className={styles.img}></div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Home;
