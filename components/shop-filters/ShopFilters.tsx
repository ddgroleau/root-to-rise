import React from 'react';
import Button from '../button/Button';
import styles from './ShopFilters.module.css';

const ShopFilters = () => {
    return (
        <menu className={styles.container}>
            <section className={styles.controls}>
                <div className={styles.btnContainer}>
                    <Button text="ALL PRODUCTS" onClick={()=>{console.log("all");}}/>
                </div>
                <div className={styles.btnContainer}>
                    <Button text="HERBS" onClick={()=>{console.log("all");}}/>
                </div>
                <div className={styles.btnContainer}>
                    <Button text="ACTIONS" onClick={()=>{console.log("all");}}/>
                </div>
                <div className={styles.btnContainer}>
                    <Button text="ENERGIES" onClick={()=>{console.log("all");}}/>
                </div>
                <div className={styles.btnContainer}>
                    <Button text="SORT BY ⇕" onClick={()=>{console.log("all");}}/>
                </div>
            </section>
        </menu>
    );
};

export default ShopFilters;