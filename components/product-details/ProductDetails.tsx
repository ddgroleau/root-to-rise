import React, { createContext, useContext, useEffect, useState } from 'react';
import ProductDto from '../../dto/ProductDto';
import ToastMessage from '../../models/ToastMessage';
import { CartContext } from '../../pages/_app';
import Button from '../button/Button';
import ImageWithFallback from '../image-with-fallback/ImageWithFallback';
import SpecialChar from '../special-char/SpecialChar';
import Toast from '../toast/Toast';
import styles from './ProductDetails.module.css';

type ProductDetailsProps = {
    product:ProductDto
}

const ProductDetails = ({product}:ProductDetailsProps) => {
    const [quantity, setQuantity] = useState<number>(1);
    const [eventMessages, setEventMessages] = useState<ToastMessage[]>([]);
    const cartContext = useContext(CartContext);
   
    const handleQuantityChange = (event:any) => {
        const requestedQuantity = event.target.value;
        if(requestedQuantity > product.stockQuantity || requestedQuantity < 0) return;
        setQuantity(requestedQuantity);
    };

    const handleAddToCart = () => {
        if (typeof window !== 'undefined') {
            let cartJson:string|null = localStorage.getItem("cart");
            if(!cartJson) return localStorage.setItem("cart",JSON.stringify([{item:product,quantity:quantity}]));
            
            let cart = JSON.parse(cartJson);
            cart.push({item:product,quantity:quantity});
            localStorage.setItem("cart",JSON.stringify(cart));
            cartContext.setCart(cart);
            
            return setEventMessages(
                [
                    ...eventMessages, 
                    { message:`${product.name} added to cart.`, isSuccess:true }
                ]);
        } 
    };

    return (
        <section className={styles.container}>
            <div className={styles.text}>
                <h1 className={styles.title}>{product.name}</h1>
                <p className={styles.price}><SpecialChar>$</SpecialChar>{product.price}</p>
                <p className={styles.description}>{product.description}</p>
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
                <div className={styles.btn}>
                    <Button text="Add to cart" onClick={handleAddToCart}/>
                </div>
                <div className={styles.btn}>
                    <Button text="Checkout" onClick={handleAddToCart}/>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <ImageWithFallback
                    src={"/" + product.imagePath}
                    fallbackSrc="/product_tummy-tamer.png"
                    height={400}
                    width={325}
                    alt="Product Image" />
            </div>
            <Toast messages={eventMessages} />
        </section>);
};

export default ProductDetails;