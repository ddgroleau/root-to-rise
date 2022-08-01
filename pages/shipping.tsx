import { useRouter } from 'next/router';
import React, { useState } from 'react';
import AddressRadioInput from '../components/address-radio-input/AddressRadioInput';
import Button from '../components/button/Button';
import Layout from '../components/layout/Layout';
import AddressDto from '../dto/AddressDto';
import styles from '../styles/shipping/Shipping.module.css';

const Shipping = () => {
    const router = useRouter();
    const [selectedAddress, setSelectedAddress] = useState<string>("");

    let mockAddress1 = new AddressDto();
    mockAddress1.addressId = 1;
    mockAddress1.fullName = 'George Washington';
    mockAddress1.addressLine1 = "9234 Hollywood Bvld.";
    mockAddress1.addressLine2 = "Apt 123";
    mockAddress1.city = "Hollwood";
    mockAddress1.state = "CA";
    mockAddress1.zipCode = "90210";
    mockAddress1.phone = "8156904201";
    mockAddress1.isDefault = true;

    
    let mockAddress2 = new AddressDto();
    mockAddress2.addressId = 2;
    mockAddress2.fullName = 'George Washington';
    mockAddress2.addressLine1 = "9234 Hollywood Bvld.";
    mockAddress2.addressLine2 = "Apt 123";
    mockAddress2.city = "Hollwood";
    mockAddress2.state = "CA";
    mockAddress2.zipCode = "90210";
    mockAddress2.phone = "8156904201";

    const handleAddressSelect = (event:any) => setSelectedAddress(event.target.value);

    return (
        <Layout
            metaDescription="All natural tinctures, salves and herbal remedies" 
            pageTitle="Shipping | Root to Rise Botanicals"
        >
            <div className={styles.pageContainer}>
                <section className={styles.addressSelection}>
                    <h1>Choose Shipping Address</h1>
                    <div>
                        <AddressRadioInput 
                            address={mockAddress1} 
                            onChange={handleAddressSelect} 
                            isChecked={mockAddress1.addressId.toString() === selectedAddress}
                        />
                        <AddressRadioInput 
                            address={mockAddress2} 
                            onChange={handleAddressSelect} 
                            isChecked={mockAddress2.addressId.toString() === selectedAddress}
                        />
                    </div>
                    <button className={styles.addAddress}>
                        <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="20" x2="20" y2="40" stroke="#063723" strokeWidth="6"/>
                            <line y1="20" x2="40" y2="20" stroke="#063723" strokeWidth="6"/>
                        </svg>
                        <h3>Add a new address</h3>
                    </button>
                </section>

                <section className={styles.methodSelection}>
                    <h2>Choose Shipping Method</h2>
                </section>
                <section>
                    <Button text='PROCEED TO SECURE CHECKOUT' onClick={()=>router.push("/coming-soon")} />
                </section>
            </div>
        </Layout>
    );
};

export default Shipping;