import React from 'react';
import FilterItem from '../../models/FilterItem';
import Checkbox from '../checkbox/Checkbox';
import styles from './FilterOption.module.css';

type FilterOptionProps = {
    items:FilterItem<string>;
    labelText: string;
}

const FilterOption = ({items, labelText}:FilterOptionProps) => {
    return (
        <details className={styles.filterDetails}>
            <summary className={styles.filterSummary}>
                {labelText}
            </summary>
            <div className={styles.optionsContainer}>
                {items.elements.map(item=> {
                    return <Checkbox 
                        key={item} 
                        label={item} 
                        checkboxRef={items.references[items.elements.indexOf(item)]}
                    />;
                })}
            </div>
        </details>
    );
};

export default FilterOption;