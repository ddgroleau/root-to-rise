import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <nav className={styles.navbar}>
            <button className={styles.mobileToggleContainer} onClick={()=>setIsToggled(!isToggled)}>
                <Image width="50" height="50" src="/hamburger.svg" alt="Mobile toggle icon."/>
            </button>
            <menu className={isToggled ? styles.navMenuMobile : styles.navMenuDesktop}>
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>About</Link>
                <Link href={"/"}>Contact</Link>
            </menu>
        </nav>
    );
};

export default Navbar;
