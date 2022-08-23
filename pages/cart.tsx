import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import AddressRadioInput from '../components/address-radio-input/AddressRadioInput';
import CartItem from '../components/cart-item/CartItem';
import CheckoutBreadcrumb from '../components/checkout-breadcrumb/CheckoutBreadcrumb';
import Layout from '../components/layout/Layout';
import ShippingMethodRadioInput from '../components/shipping-method-radio-input/ShippingMethodRadioInput';
import AddressDto from '../dto/AddressDto';
import ShippingMethodDto from '../dto/ShippingMethodDto';
import styles from '../styles/Cart.module.scss';
import { CartContext } from './_app';

const Cart = () => {
    const cartContext = useContext(CartContext);
    const [animate,setAnimate] = useState<boolean>(false);
    const [selectedAddress, setSelectedAddress] = useState<string>("");
    const [selectedShippingMethod, setSelectedShippingMethod] = useState<string>("");

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

    let mockShippingMethod1 = new ShippingMethodDto();
    mockShippingMethod1.shippingMethodId = 1;
    mockShippingMethod1.carrier = 'USPS';
    mockShippingMethod1.name = 'First Class Mail';
    mockShippingMethod1.deliveryRangeUnits = 'Business Days';
    mockShippingMethod1.deliveryRangeLowerBounds = 1;
    mockShippingMethod1.deliveryRangeUpperBounds = 5;
    mockShippingMethod1.cost = 5;

    let mockShippingMethod2 = new ShippingMethodDto();
    mockShippingMethod2.shippingMethodId = 2;
    mockShippingMethod2.carrier = 'USPS';
    mockShippingMethod2.name = 'Priority Mail';
    mockShippingMethod2.deliveryRangeUnits = 'Business Days';
    mockShippingMethod2.deliveryRangeLowerBounds = 1;
    mockShippingMethod2.deliveryRangeUpperBounds = 2;
    mockShippingMethod2.cost = 10;

    const handleQuantityChange = (event:any,productId:number) => {
        const newQuantity = event.target.value;
        if(newQuantity < 1) return;
        let cart = cartContext.cart.map(item => {
            if(item.productId === productId) item.quantity = newQuantity;
            return item;
        });
        if(typeof window !== 'undefined') localStorage.setItem("cart",JSON.stringify(cart));
        cartContext.setCart(cart);
    };

    const handleAddressSelect = (event:any) => setSelectedAddress(event.target.value);
    const handleMethodSelect = (event:any) => setSelectedShippingMethod(event.target.value);

    const handleRemoveItem = (productId:number) => {
        let cart = cartContext.cart.filter(item => item.productId !== productId);
        if(typeof window !== 'undefined') localStorage.setItem("cart",JSON.stringify(cart));
        cartContext.setCart(cart);
        setAnimate(true);
    };

    return (
        <Layout
            metaDescription="All natural tinctures, salves and herbal remedies" 
            pageTitle="Cart | Root to Rise Botanicals">
            {
                !cartContext || cartContext.cart.length < 1 ?
                    <section className={styles.emptyCart}>
                        <h1>
                            <span>Your cart is empty. 🛒</span>
                            <Link href="/shop" passHref>Go Shopping 🍄</Link>
                        </h1>
                    </section> :
                    <section className={styles.pageContainer}>
                        <section className={styles.cartItems}>
                            <h2 className={styles.title}>Review Your Order</h2>
                            <div className={animate ? styles.fadeIn : ''} onAnimationEnd={()=>setAnimate(false)}>
                                {
                                    cartContext.cart.map(item => {
                                        return (
                                            <CartItem 
                                                item={item} 
                                                key={cartContext.cart.indexOf(item)}
                                                handleQuantityChange={
                                                    (event)=>handleQuantityChange(event,item.productId)}
                                                handleRemoveItem={()=>handleRemoveItem(item.productId)}
                                            />
                                        );
                                    })
                                }
                            </div>
                        </section>
                        <section className={styles.shipping}>
                            <section className={styles.addressSelection}>
                                <h2 className={styles.title}>Choose Shipping Address</h2>
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
                                    <svg 
                                        width="20" 
                                        height="20" 
                                        viewBox="0 0 40 40" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg">
                                        <line x1="20" x2="20" y2="40" stroke="#063723" strokeWidth="6"/>
                                        <line y1="20" x2="40" y2="20" stroke="#063723" strokeWidth="6"/>
                                    </svg>
                                    <h3 className={styles.title}>Add a new address</h3>
                                </button>
                            </section>
                            <section className={styles.methodSelection}>
                                <h2 className={styles.title}>Choose Shipping Method</h2>
                                <div>
                                    <ShippingMethodRadioInput
                                        method={mockShippingMethod1}
                                        onChange={handleMethodSelect}
                                        isChecked=
                                            {mockShippingMethod1.shippingMethodId.toString() === selectedShippingMethod}
                                    />
                                    <ShippingMethodRadioInput
                                        method={mockShippingMethod2}
                                        onChange={handleMethodSelect}
                                        isChecked=
                                            {mockShippingMethod2.shippingMethodId.toString() === selectedShippingMethod}
                                    />
                                </div>
                                <div className={styles.btn}>
                                    <CheckoutBreadcrumb btnText='🔒 CONTINUE TO SECURE CHECKOUT' link='/checkout' />
                                </div>
                            </section>
                        </section>
                    </section>
            }
        </Layout>
    );
};

export default Cart;