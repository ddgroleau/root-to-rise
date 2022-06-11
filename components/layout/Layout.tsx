import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../navbar/Navbar';
import SpecialChar from '../special-char/SpecialChar';
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
            <main className={styles.main}>
                {children}
            </main>
            <div style={{marginLeft:"5%", position:"fixed", bottom: "0", backgroundColor: "#E0DDD7", width:"100%"}}>
                Site by 🧙 <Link href="https://www.linkedin.com/in/dangroleau/">Dan Groleau</Link>
            </div>
        </div>
    );
};

export default Layout;
