import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import Layout from '../components/layout/Layout';
import styles from '../styles/Checkout.module.scss';

const Checkout = () => {
    const { data: session } = useSession();
    if(session) {
        return (
            <Layout pageTitle="Checkout">
                <section className={styles.pageContainer}>
                    You are being redirected to Stripe Checkout
                </section>
                {session && session.user ? 
                    <>
                Signed in as {session.user.email} <br/>
                        <button onClick={() => signOut()}>Sign out</button>
                    </> : undefined}
            </Layout>
        );

    }
    return <>
        Not signed in <br/>
        <button onClick={() => signIn()}>Sign in</button>
    </>;
};

export default Checkout;