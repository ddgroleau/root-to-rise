import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../navbar/Navbar';
import SpecialChar from '../special-char/SpecialChar';
import styles from './Layout.module.scss';

const Layout = ({pageTitle, metaDescription, children}:any) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar/>
            <main className={styles.main}>
                {children}
            </main>
            <div style={{
                paddingLeft:"5%", 
                zIndex: "3",
                position:"sticky",
                bottom: "0",
                backgroundColor: "rgba(224, 221, 215,0.5)", 
                width:"100%"
            }}>
                Site by 🧙 <Link href="http://dangroleau.fullstackdan.com">Dan Groleau</Link>
            </div>
        </div>
    );
};

export default Layout;
