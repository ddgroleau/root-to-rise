import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import Button from '../components/button/Button';
import CartItem from '../components/cart-item/CartItem';
import Layout from '../components/layout/Layout';
import SpecialChar from '../components/special-char/SpecialChar';
import StripeLogo from '../components/stripe-logo/StripeLogo';
import styles from '../styles/cart/Cart.module.css';
import { CartContext } from './_app';

const Cart = () => {
    const router = useRouter();
    const cartContext = useContext(CartContext);
    const [animate,setAnimate] = useState<boolean>(false);

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
                    <div className={styles.emptyCart}>
                        <h1>
                            <span>Your cart is empty. 🛒</span>
                            <Link href="/shop" passHref>Go Shopping 🍄</Link>
                        </h1>
                    </div> :
                    <div className={styles.pageContainer}>
                        <div>
                            <h1 className={styles.title}>Review Your Order</h1>
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
                        </div>
                        <div className={styles.btn}>
                            <Button text='🔒 CONTINUE TO SHIPPING' onClick={()=>router.push("/coming-soon")} />
                            <StripeLogo/>
                        </div>
                    </div>
            }
        </Layout>
    );
};

export default Cart;