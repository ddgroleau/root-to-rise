import React, { useState } from 'react';
import styles from './Dropdown.module.css';

type DropdownProps = {
    defaultValue:number;
    defaultText:string
    options:Option[]
}

export type Option = {
    value:number, 
    text:string
}

const Dropdown = ({defaultValue, defaultText,options}:DropdownProps) => {

    return (
        <div className={styles.container}>
            <select className={styles.select}>
                <option value={defaultValue}>{defaultText}</option>
                {options.length > 0 ? options.map(option => {
                    return <option key={options.indexOf(option)} value={option.value}>{option.text}</option>;
                }) : undefined}
            </select>
        </div>

    );
};

export default Dropdown;