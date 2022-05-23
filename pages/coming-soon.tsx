import Link from 'next/link';
import React from 'react';
import Layout from '../components/layout/Layout';
import SpecialChar from '../components/special-char/SpecialChar';

const ComingSoon = () => {
    const styles = {
        marginTop: "min(20rem,45%)", 
        color: "#063723", 
        fontSize: "max(3rem, 2.5vw)", 
        maxWidth: "min(50rem,90%)"
    };
    const container = {
        display: 'flex', 
        width: "100vw", 
        justifyContent: "center", 
        height: "100vh", 
        textAlign: "center"
    };
    return (
        <Layout>
            <div style={container}>
                <h1 style={styles}>
                    This page is under construction, but will be coming soon<SpecialChar>!</SpecialChar>
                    <Link href="/" passHref>
                        <p style={{color: "#063723", textDecoration: "underline", cursor: "pointer"}}>
                        Return to Home
                        </p>
                    </Link>
                </h1>
            </div>
        </Layout>
    );
};

export default ComingSoon;