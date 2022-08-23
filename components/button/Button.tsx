import React from "react";
import styles from './Button.module.scss';

type ButtonProps = {
    text:string;
    onClick:React.MouseEventHandler|undefined
}

const Button = ({text, onClick}:ButtonProps) => {
    return (
        <button onClick={onClick} className={styles.btn}>
            {text}
        </button>
    );
};

export default Button;