import Head from 'next/head';
import Link from 'next/link';
// import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import styles from './Layout.module.css';

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
            <main>
                {children}
            </main>
            {/* <Footer/> */}
            <div>
                {new Date().getFullYear()} | <Link href="https://www.linkedin.com/in/dangroleau/">Dan Groleau</Link>
            </div>
        </div>
    );
};

export default Layout;
