import React, { Dispatch, RefObject, SetStateAction, useMemo, useState } from 'react';
import IngredientDto from '../../dto/IngredientDto';
import PropertyDto from '../../dto/PropertyDto';
import TraitDto from '../../dto/TraitDto';
import FilterItem from '../../models/FilterItem';
import SortParams from '../../models/SortParams';
import Button from '../button/Button';
import ChevronButton from '../chevron-button/ChevronButton';
import FilterOption from '../filter-option/FilterOption';
import styles from './ShopFilters.module.scss';

type ShopFilterProps = {
    onClearFilters:React.MouseEventHandler;
    onApplyFilters:React.MouseEventHandler;
    ingredients:FilterItem<string>;
    properties:FilterItem<string>;
    traits:FilterItem<string>;
    sortParams: {param:SortParams,ref:RefObject<HTMLInputElement>}[]
    filterError:{isFilterError:boolean,setIsFilterError:Dispatch<SetStateAction<boolean>>};
}

const ShopFilters = ({
    ingredients,properties,traits,sortParams,filterError,onClearFilters, onApplyFilters}:ShopFilterProps) => {
    const [mobileToggled, setMobileToggled] = useState(false);
    const [animate, setAnimate] = useState(false);

    useMemo(()=> {
    },[filterError]);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setAnimate(!mobileToggled);
        setMobileToggled(!mobileToggled);
    };

    const handleAnimationEnd = () => {
        setAnimate(!mobileToggled);
    };

    const manageSortItems = (event:React.MouseEvent<HTMLElement,MouseEvent>) => {
        let selectedParam = event.target as HTMLElement;
        sortParams.map(item => { 
            if(selectedParam.id !== item.param && item.ref.current)
                item.ref.current.checked = false;
        });
    };

    return (
        <menu className={styles.container}>
            <section className={styles.mobileControls}>
                <span className={styles.controlsText}>
                    {"🌻 Filter your search"}
                    <ChevronButton rotateDegrees={mobileToggled ? -90 : 90} onClick={handleClick}/>
                </span>
            </section>
            <section 
                className={`${mobileToggled ? styles.openFilters : styles.closeFilters} 
                    ${animate ? styles.slideUp : undefined}`}
                onAnimationEnd={handleAnimationEnd}
            >
                <div className={styles.filterOption}>
                    <FilterOption items={ingredients} labelText={"Herbs"}/>
                </div>
                <div className={styles.filterOption}>
                    <FilterOption items={properties} labelText={"Actions"}/>
                </div>
                <div className={styles.filterOption}>
                    <FilterOption items={traits} labelText={"Energies"}/>
                </div>
                <div className={styles.filterOption} onClick={(event)=>manageSortItems(event)}>
                    <FilterOption 
                        items={{
                            elements:sortParams.map(option => option.param),
                            references:sortParams.map(option => option.ref)}}
                        labelText={"Sort By"}/>
                </div>
                <div 
                    className={`${filterError.isFilterError ? styles.shake : undefined } ${styles.filterBtn}`} 
                    onAnimationEnd={()=>filterError.setIsFilterError(false)}
                >
                    <Button text="APPLY FILTERS" onClick={onApplyFilters}/>
                </div>
                <div className={styles.filterBtn}>
                    <Button text="CLEAR FILTERS" onClick={onClearFilters}/>
                </div>
            </section>
        </menu>
    );
};

export default ShopFilters;