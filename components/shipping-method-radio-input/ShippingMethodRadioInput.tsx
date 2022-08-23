import React, { ChangeEventHandler } from 'react';
import ShippingMethodDto from '../../dto/ShippingMethodDto';
import styles from './ShippingMethodRadioInput.module.scss';

type ShippingMethodRadioInputProps = {
    method:ShippingMethodDto;
    onChange:ChangeEventHandler<HTMLInputElement>;
    isChecked:boolean;
}


const ShippingMethodRadioInput = ({method, onChange, isChecked}:ShippingMethodRadioInputProps) => {
    return (
        <label htmlFor={method.shippingMethodId.toString()} className={styles.container}>
            <input 
                className={styles.radio} 
                type="radio" 
                id={method.shippingMethodId.toString()} 
                value={method.shippingMethodId} 
                onChange={onChange}
                checked={isChecked}
            />
            <div className={styles.methodText}>
                <p className="specialChar">{method.carrier} {method.name} </p>
                <div>
                    <p className="specialChar">
                        {/* eslint-disable-next-line max-len */}
                        {method.deliveryRangeLowerBounds} - {method.deliveryRangeUpperBounds} {method.deliveryRangeUnits}
                    </p>
                    <p className="specialChar">${method.cost.toFixed(2)}</p>
                </div>
            </div>
        </label>
    );
};

export default ShippingMethodRadioInput;