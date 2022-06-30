import React, { RefObject } from 'react';
import styles from './Checkbox.module.css';

type CheckboxProps = {
    label:string;
    checkboxRef:RefObject<HTMLInputElement>;
}

const Checkbox = ({label,checkboxRef}:CheckboxProps) => {
    return (
        <div className={styles.container}>
            <label htmlFor={label}>{label}</label>
            <input className={styles.checkbox} id={label} type="checkbox" ref={checkboxRef}></input>
        </div>
    );
};

export default Checkbox;