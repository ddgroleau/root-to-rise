import React, { ChangeEventHandler } from 'react';
import ProductDto from '../../dto/ProductDto';
import styles from './QuantitySizeInputs.module.css';

type QuantitySizeInputProps = {
    quantity:number;
    handleQuantityChange:ChangeEventHandler<HTMLInputElement>;
    product:ProductDto;
}

const QuantitySizeInputs = ({quantity,handleQuantityChange,product}:QuantitySizeInputProps) => {
    return (
        <div className={styles.inputContainer}>
            <label>QUANTITY:
                <input 
                    type="number" 
                    value={quantity}
                    className={`${styles.input} specialChar`}
                    onChange={handleQuantityChange}
                />
            </label>
            <label>SIZE:
                <input 
                    type="text" 
                    value={product.measurementSize + " " + product.measurementUnit} 
                    disabled={true}
                    className={`${styles.input} specialChar`}
                />
            </label>
        </div>
    );
};

export default QuantitySizeInputs;