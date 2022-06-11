import React, { useState } from 'react';
import styles from './Dropdown.module.css';

type DropdownProps = {
    defaultValue:number;
    defaultText:string
    options?:{value:string, text:string}[]
}

const Dropdown = ({defaultValue, defaultText,options=[]}:DropdownProps) => {

    return (
        <div className={styles.container}>
            <select className={styles.select}>
                <option value={defaultValue}>{defaultText}</option>
            </select>
        </div>

    );
};

export default Dropdown;