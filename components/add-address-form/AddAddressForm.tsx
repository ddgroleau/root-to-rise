import React, { useState } from 'react';
import styles from './AddAddressForm.module.scss';

type AddAddressFormProps = {
    isOpen:boolean
}

const AddAddressForm = ({isOpen}:AddAddressFormProps) => {
    const [open, setOpen] = useState<boolean>(isOpen);

    const handleCancel = () =>  setOpen(true);

    return (
        <form className={open ? styles.formOpen : styles.formClosed}>
            <h1 className={styles.title}>Add a new address</h1>
            <div className={styles.formItem}>
                <label htmlFor="country">Country or Region</label>
                <select id="country">
                    <option value="1">United States</option>
                </select>
            </div>
            <div className={styles.formItemContainer}>
                <div className={styles.formItem}>
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName"/>
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" id="phoneNumber"/>
                </div>
            </div>
            <div className={styles.formItem}>
                <label htmlFor="addressLine1">Address</label>
                <input type="text" id="addressLine1"/>
                <input type="text" id="addressLine2"/>
            </div>
            <div className={`${styles.formItemContainer} ${styles.datalistContainer}`}>
                <div className={styles.formItem}>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city"/>
                </div>
                <div className={styles.formDatalist}>
                    <label htmlFor="state">State</label>
                    <input list="state"/>
                    <datalist id="state">
                        <option value="AL" label="Alabama" />
                        <option value="AK" label="Alaska" />
                        <option value="AZ" label="Arizona" />
                        <option value="AR" label="Arkansas" />
                        <option value="CA" label="California" />
                        <option value="CO" label="Colorado" />
                        <option value="CT" label="Connecticut" />
                        <option value="DE" label="Delaware" />
                        <option value="DC" label="District Of Columbia" />
                        <option value="FL" label="Florida" />
                        <option value="GA" label="Georgia" />
                        <option value="HI" label="Hawaii" />
                        <option value="ID" label="Idaho" />
                        <option value="IL" label="Illinois" />
                        <option value="IN" label="Indiana" />
                        <option value="IA" label="Iowa" />
                        <option value="KS" label="Kansas" />
                        <option value="KY" label="Kentucky" />
                        <option value="LA" label="Louisiana" />
                        <option value="ME" label="Maine" />
                        <option value="MD" label="Maryland" />
                        <option value="MA" label="Massachusetts" />
                        <option value="MI" label="Michigan" />
                        <option value="MN" label="Minnesota" />
                        <option value="MS" label="Mississippi" />
                        <option value="MO" label="Missouri" />
                        <option value="MT" label="Montana" />
                        <option value="NE" label="Nebraska" />
                        <option value="NV" label="Nevada" />
                        <option value="NH" label="New Hampshire" />
                        <option value="NJ" label="New Jersey" />
                        <option value="NM" label="New Mexico" />
                        <option value="NY" label="New York" />
                        <option value="NC" label="North Carolina" />
                        <option value="ND" label="North Dakota" />
                        <option value="OH" label="Ohio" />
                        <option value="OK" label="Oklahoma" />
                        <option value="OR" label="Oregon" />
                        <option value="PA" label="Pennsylvania" />
                        <option value="RI" label="Rhode Island" />
                        <option value="SC" label="South Carolina" />
                        <option value="SD" label="South Dakota" />
                        <option value="TN" label="Tennessee" />
                        <option value="TX" label="Texas" />
                        <option value="UT" label="Utah" />
                        <option value="VT" label="Vermont" />
                        <option value="VA" label="Virginia" />
                        <option value="WA" label="Washington" />
                        <option value="WV" label="West Virginia" />
                        <option value="WI" label="Wisconsin" />
                        <option value="WY" label="Wyoming" />
                    </datalist>
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="zipCode">Zip Code</label>
                    <input type="text" id="zipCode"/>
                </div>
            </div>
            <div className={styles.btns}>
                <button type="button">Use this address</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};

export default AddAddressForm;