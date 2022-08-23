import React, { ChangeEventHandler } from 'react';
import AddressDto from '../../dto/AddressDto';
import styles from './AddressRadioInput.module.scss';

type AddressRadioInputProps = {
    address:AddressDto;
    onChange:ChangeEventHandler<HTMLInputElement>;
    isChecked:boolean;
}

const AddressRadioInput = ({address, onChange, isChecked}:AddressRadioInputProps) => {
    return (
        <label htmlFor={address.addressId.toString()} className={styles.container}>
            <input 
                className={styles.radio} 
                type="radio" 
                id={address.addressId.toString()} 
                value={address.addressId} 
                onChange={onChange}
                checked={isChecked}
            />
            <div className={styles.addressComponents}>
                <p className="specialChar">{address.fullName}</p>
                <p className="specialChar">{address.addressLine1}</p>
                <p className="specialChar">{address.addressLine2}</p>
                <p className="specialChar">{address.city}, {address.state} {address.zipCode}</p>
                <p className="specialChar">
                    ({address.phone.substring(0,3)}) {address.phone.substring(3,6)} - {address.phone.substring(6,10)}
                </p>
                {address.isDefault ? <p className={styles.default}>Default</p> : undefined}
            </div>
        </label>
    );
};

export default AddressRadioInput;