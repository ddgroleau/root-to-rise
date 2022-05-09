import Head from 'next/head';
import Navbar from '../navbar/Navbar';

const Layout = ({pageTitle, metaDescription, children}:any) => {
    return (
        <div>
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
        </div>
    );
};

export default Layout;
