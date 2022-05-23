import Link from 'next/link';
import React from 'react';
import SpecialChar from '../special-char/SpecialChar';
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
                        Crafted with Mother Nature<SpecialChar>'</SpecialChar>s most beautiful creations
                    </p>
                    <Link href="/coming-soon">Learn More</Link>
                </div>
            </div>
            <div className={styles.bulletinDescription}>
                <span className={styles.descriptionTitle}>Our Promises</span>
                <div className={styles.description}>
                    <div className={styles.descriptionText}>
                        <span className={styles.descriptionSubtitle}>
                            Cruelty Free<SpecialChar>,</SpecialChar> Vegetarian <SpecialChar>+</SpecialChar> Vegan
                            <SpecialChar>*-</SpecialChar>Friendly
                        </span>
                        <p>
                        We<SpecialChar>'</SpecialChar>re 
                        vegetarians here, so 
                        we<SpecialChar>'</SpecialChar>ll keep it that way with all of our products. 
                        Protecting animals and their welfare is our top priority, and always will be
                        </p>
                    </div>
                    <div className={styles.descriptionText}>
                        <span className={styles.descriptionSubtitle}>Hand<SpecialChar>-</SpecialChar>Crafted</span>
                        <p>
                        Selected<SpecialChar>,</SpecialChar> blended
                            <SpecialChar>,</SpecialChar> hand crafted <SpecialChar>&</SpecialChar> poured 
                        products in Denver<SpecialChar>,</SpecialChar> Colorado. 
                        Everything you see was made with love by Rachel herself 
                        </p>
                    </div>
                    <div className={styles.descriptionText}>
                        <span className={styles.descriptionSubtitle}>Earth Grown</span>
                        <p>
                        We care deeply about the environment and only source our 
                        herbs and base products from sustainable organizations we love and trust
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandBulletin;