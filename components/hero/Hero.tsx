import React from 'react';
import styles from './Hero.module.css';
import Button from '../button/Button';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <p className={styles.tagline}>
                Earth<span className="specialChar">'</span>s 
                Approach to Self<span className="specialChar">-</span>Care
                </p>
                <div className={styles.btnContainer}>
                    <Button text="Shop Now" onClick={()=>{}} />
                </div>
            </div>
            <div className={styles.imgContainer}>
                <div className={styles.img}></div>
            </div>
        </section>
    );
};

export default Hero;