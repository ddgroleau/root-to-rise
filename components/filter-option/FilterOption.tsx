import React from 'react';
import FilterItem from '../../models/FilterItem';
import Checkbox from '../checkbox/Checkbox';
import styles from './FilterOption.module.css';

type FilterOptionProps = {
    items:FilterItem<any>;
    labelText: string;
}

const FilterOption = ({items, labelText}:FilterOptionProps) => {
    return (
        <details className={styles.filterDetails}>
            <summary className={styles.filterSummary}>
                {labelText}
            </summary>
            <div className={styles.optionsContainer}>
                {items.elements.slice(0,5).map(item=> {
                    return <Checkbox 
                        key={item.name} 
                        label={item.name} 
                        checkboxRef={items.references[items.elements.indexOf(item)]}
                    />;
                })}
            </div>
        </details>
    );
};

export default FilterOption;