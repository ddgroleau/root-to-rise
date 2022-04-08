import React from "react";
import styles from '../../styles/button/Button.module.css';

type buttonProps = {
    text:string;
    onClick:React.MouseEventHandler|undefined
}

const Button = ({text, onClick}:buttonProps) => {
    return (
        <button onClick={onClick} className={styles.btn}>
            {text}
        </button>
    );
};

export default Button;