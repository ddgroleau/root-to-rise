import React, { useRef, useState } from 'react';
import Button from '../button/Button';
import ChevronButton from '../chevron-button/ChevronButton';
import Dropdown from '../dropdown/Dropdown';
import styles from './ShopFilters.module.css';

type ShopFilterProps = {
    onClick:React.MouseEventHandler
}

const ShopFilters = ({onClick}:ShopFilterProps) => {
    const [mobileToggled, setMobileToggled] = useState(false);
    const [animate, setAnimate] = useState(false);

    const handleClick = () => {
        setAnimate(!mobileToggled);
        setMobileToggled(!mobileToggled);
    };

    const handleAnimationEnd = () => {
        setAnimate(!mobileToggled);
    };

    return (
        <menu className={styles.container}>
            <section className={styles.mobileControls}>
                <span className={styles.controlsText}>
                    {"🌻 Filter your search"}
                    <ChevronButton rotateDegrees={mobileToggled ? -90 : 90} onClick={handleClick}/>
                </span>
            </section>
            <section 
                className={`${mobileToggled ? styles.openFilters : styles.closeFilters} 
                    ${animate ? styles.slideUp : undefined}`}
                onAnimationEnd={handleAnimationEnd}
            >
                <div className={styles.btnContainer}>
                    <Button text="ALL PRODUCTS" onClick={onClick}/>
                </div>
                <div className={styles.btnContainer}>
                    <Dropdown defaultValue={0} defaultText="HERBS"/>
                </div>
                <div className={styles.btnContainer}>
                    <Dropdown defaultValue={0} defaultText="ACTIONS"/>
                </div>
                <div className={styles.btnContainer}>
                    <Dropdown defaultValue={0} defaultText="ENERGIES"/>
                </div>
                <div className={styles.btnContainer}>
                    <Dropdown defaultValue={0} defaultText="SORT BY ⇕"/>
                </div>
            </section>
        </menu>
    );
};

export default ShopFilters;