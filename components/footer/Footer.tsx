import Link from 'next/link';
import React from 'react';
import Button from '../button/Button';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.container}>
            <section className={styles.columnOne}>
                <p>
                    Follow us on <Link href="https://www.instagram.com/roottorisebotanicals/">Instagram</Link>
                </p>
            </section>
            <section className={styles.columnTwo}>
                <label htmlFor="footerInput">Sign up to recieve store updates and 10% off your first purchase*</label>
                <input id="footerInput"></input>
                <div className={styles.btn}>
                    <Button text='Sign Up' onClick={()=>{}}/>
                </div>
            </section>
            <section className={styles.columnThree}>
                <Link href="/shop">Shop</Link>
                <Link href="/blog">Journal</Link>
                <Link href="/about">About</Link>
                <Link href="/yoga">Yoga with Rachel</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/wholesale">Wholesale Information</Link>
                <Link href="/">Shipping & Returns</Link>
            </section>
        </footer>
    );
};

export default Footer;