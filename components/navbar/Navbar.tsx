import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ProductDto from "../../dto/ProductDto";
import ConfigService from "../../services/config.service";
import CartIcon from "../cart-icon/CartIcon";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [isAnimated, setIsAnimated] = useState(false);
    const ICON_DIMENSION = 25;
    const router = useRouter();

    const handleClick = () => {
        setIsAnimated(!isToggled);
        setIsToggled(!isToggled);
    };

    return (
        <nav className={styles.navbar}>
            <Link href={"/"} passHref>
                <div className={styles.logoContainer}>
                    <div className={styles.logo}>
                    </div>
                </div>
            </Link>
            <div className={styles.navContent}>
                <header className={styles.brand} onClick={()=>router.push("/")}>
                    Root To Rise Botanicals
                </header>
                <button className={styles.mobileToggleContainer} onClick={handleClick}>
                    <Image width="75" height="75" src="/hamburger.svg" alt="Mobile toggle icon."/>
                </button>
                <menu 
                    className={`${isToggled ? styles.navMenuMobile : styles.navMenuDesktop} 
                        ${isAnimated ? styles.slideDown : undefined}`} 
                    onAnimationEnd={()=>setIsAnimated(false)}
                    onClick={()=>{if(isToggled)setIsToggled(!isToggled);}}>
                    <Link href={"/shop"}>Shop</Link>
                    <Link href={"/coming-soon"}>About</Link>
                    <Link href={"/coming-soon"}>Yoga</Link>
                    <Link href={"/coming-soon"}>Contact</Link>
                    <Link href={"/coming-soon"}>Blog</Link>
                    <Link href={"/coming-soon"}>Wholesale</Link>
                    <div className={styles.iconContainer}>
                        <div className={styles.navIcon}>
                            <Link href={ConfigService.getVariable("OAUTH2")} passHref>
                                <a>
                                    <Image width={ICON_DIMENSION} height={ICON_DIMENSION} 
                                        src="/icon-person.svg" alt="Account Icon."/>
                                </a>
                            </Link>
                        </div>
                        <div className={styles.navIcon}>
                            <Link href={"/coming-soon"} passHref>
                                <a>
                                    <Image width={ICON_DIMENSION} height={ICON_DIMENSION} 
                                        src="/icon-instagram.svg" alt="Instagram Icon."/>
                                </a>
                            </Link>
                        </div>
                        <div className={styles.navIcon}>
                            <CartIcon iconDimension={ICON_DIMENSION}/>
                        </div>
                    </div>
                </menu>
            </div>
        </nav>
    );
};

export default Navbar;
