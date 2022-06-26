import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import IngredientDto from '../../dto/IngredientDto';
import PropertyDto from '../../dto/PropertyDto';
import TraitDto from '../../dto/TraitDto';
import { getAllIngredients, getAllProperties, getAllTraits } from '../../services/react-query/api.service';
import Button from '../button/Button';
import ChevronButton from '../chevron-button/ChevronButton';
import Dropdown from '../dropdown/Dropdown';
import styles from './ShopFilters.module.css';

type ShopFilterProps = {
    onClick:React.MouseEventHandler
}

const ShopFilters = ({onClick}:ShopFilterProps) => {
    const { isLoading:isGettingIngredients,isSuccess:isIngredientSuccess, data: ingredientData } 
        = useQuery("allIngredients", getAllIngredients );
    const { isLoading:isGettingProperties, isSuccess:isPropertySuccess, data: propertyData } 
        = useQuery("allProperties", getAllProperties );
    const { isLoading:isGettingTraits,     isSuccess:isTraitSuccess, data: traitData } 
        = useQuery("allTraits", getAllTraits );
    const [mobileToggled, setMobileToggled] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [ingredients, setIngredients] = useState<IngredientDto[]>([]);
    const [properties, setProperties] = useState<PropertyDto[]>([]);
    const [traits, setTraits] = useState<TraitDto[]>([]);

    useEffect(()=> {
        if(isIngredientSuccess) setIngredients(ingredientData.data);
        if(isPropertySuccess) setProperties(propertyData.data);
        if(isTraitSuccess) setTraits(traitData.data);
    },[ingredientData,propertyData,traitData]);


    const handleClick = () => {
        setAnimate(!mobileToggled);
        setMobileToggled(!mobileToggled);
    };

    const handleAnimationEnd = () => {
        setAnimate(!mobileToggled);
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
                <div className={styles.btnContainer}>
                    <Button text="ALL PRODUCTS" onClick={onClick}/>
                </div>
                <div className={styles.btnContainer}>
                    <Dropdown 
                        defaultValue={0} 
                        defaultText="HERBS" 
                        options={ingredients.map(
                            ingredient => { return { text:ingredient.name,value:ingredient.ingredientId }; }
                        )}
                    />
                </div>
                <div className={styles.btnContainer}>
                    <Dropdown 
                        defaultValue={0} 
                        defaultText="ACTIONS"
                        options={properties.map(
                            property => { return { text:property.name,value:property.propertyId }; }
                        )}
                    />
                </div>
                <div className={styles.btnContainer}>
                    <Dropdown 
                        defaultValue={0} 
                        defaultText="ENERGIES"
                        options={traits.map(
                            trait => { return { text:trait.name,value:trait.traitId }; }
                        )}
                    />
                </div>
                <div className={styles.btnContainer}>
                    <Dropdown 
                        defaultValue={0} 
                        defaultText="SORT BY ⇕"
                        options={[
                            {text:"PRICE",value: 1}
                        ]}
                    />
                </div>
            </section>
        </menu>
    );
};

export default ShopFilters;