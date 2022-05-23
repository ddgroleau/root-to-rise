import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [isToggled, setIsToggled] = useState(false);
    const ICON_DIMENSION = 35;

    return (
        <nav className={styles.navbar}>
            <Link href={"/"} passHref>
                <div className={styles.logoContainer}>
                    <div className={styles.logo}>
                    </div>
                </div>
            </Link>
            <div className={styles.navContent}>
                <header className={styles.brand}>
                    Root To Rise Botanicals
                </header>
                <button className={styles.mobileToggleContainer} onClick={()=>setIsToggled(!isToggled)}>
                    <Image width="75" height="75" src="/hamburger.svg" alt="Mobile toggle icon."/>
                </button>
                <menu className={isToggled ? styles.navMenuMobile : styles.navMenuDesktop}>
                    <Link href={"/coming-soon"}>Shop</Link>
                    <Link href={"/coming-soon"}>About</Link>
                    <Link href={"/coming-soon"}>Yoga</Link>
                    <Link href={"/coming-soon"}>Contact</Link>
                    <Link href={"/coming-soon"}>Blog</Link>
                    <Link href={"/coming-soon"}>Wholesale</Link>
                    <div className={styles.iconContainer}>
                        <div className={styles.navIcon}>
                            <Link href={"/coming-soon"} passHref>
                                <Image width={ICON_DIMENSION} height={ICON_DIMENSION} 
                                    src="/icon-person.svg" alt="Account Icon."/>
                            </Link>
                        </div>
                        <div className={styles.navIcon}>
                            <Link href={"/coming-soon"} passHref>
                                <Image width={ICON_DIMENSION} height={ICON_DIMENSION} 
                                    src="/icon-instagram.svg" alt="Instagram Icon."/>
                            </Link>
                        </div>
                        <div className={styles.navIcon}>
                            <Link href={"/coming-soon"} passHref>
                                <Image width={ICON_DIMENSION} height={ICON_DIMENSION} 
                                    src="/icon-cart.svg" alt="Cart Icon."/>
                            </Link>
                        </div>
                    </div>
                </menu>
            </div>
        </nav>
    );
};

export default Navbar;
