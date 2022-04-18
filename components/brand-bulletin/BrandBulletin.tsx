import Link from 'next/link';
import React from 'react';
import styles from './BrandBulletin.module.css';

const BrandBulletin = () => {
    return (
        <section className={styles.bulletinContainer}>
            <div className={styles.bulletinHero}>
                <div className={styles.imgContainer}>
                    <div className={styles.img}></div>
                </div>
                <div className={styles.heroText}>
                    <p className={styles.tagline}>Getting to the Root of it All</p>
                    <p className={styles.subheading}>
                        Crafted with Mother Nature<span className="specialChar">'</span>s most beautiful creations
                    </p>
                    <Link href="/about">Learn More</Link>
                </div>
            </div>
        </section>
    );
};

export default BrandBulletin;