import React, { createContext, useContext, useEffect, useState } from 'react';
import ProductDto from '../../dto/ProductDto';
import ToastMessage from '../../models/ToastMessage';
import { CartContext } from '../../pages/_app';
import Button from '../button/Button';
import ImageWithFallback from '../image-with-fallback/ImageWithFallback';
import SpecialChar from '../special-char/SpecialChar';
import Toast from '../toast/Toast';
import styles from './ProductDetails.module.css';
import CartProductDto from '../../dto/CartProductDto';
import { useRouter } from 'next/router';
import QuantitySizeInputs from '../quantity-size-inputs/QuantitySizeInputs';

type ProductDetailsProps = {
    product:ProductDto
}

const ProductDetails = ({product}:ProductDetailsProps) => {
    const [quantity, setQuantity] = useState<number>(1);
    const [eventMessages, setEventMessages] = useState<ToastMessage[]>([]);
    const cartContext = useContext(CartContext);
    const router = useRouter();
   
    const handleQuantityChange = (event:any) => {
        const requestedQuantity = event.target.value;
        if(requestedQuantity > product.stockQuantity || requestedQuantity < 0) return;
        setQuantity(requestedQuantity);
    };

    const handleAddToCart = () => {
        if (typeof window !== 'undefined') {
            let cartJson:string|null = localStorage.getItem("cart");
            let cartItem:CartProductDto = {...product,quantity:quantity};
            if(!cartJson) return localStorage.setItem("cart",JSON.stringify([cartItem]));
            
            let cart:CartProductDto[] = JSON.parse(cartJson);

            cart = cart.map(item => {
                if(item.productId === product.productId) item.quantity += quantity;
                return item;
            });

            if(!cart.find(item => item.productId === product.productId))
                cart.push(cartItem);
            
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
                <QuantitySizeInputs
                    quantity={quantity}
                    handleQuantityChange={handleQuantityChange}
                    product={product}
                />
                <div className={styles.btn}>
                    <Button text="Add to cart" onClick={handleAddToCart}/>
                </div>
                <div className={styles.btn}>
                    <Button text="Checkout" onClick={()=>router.push("/cart")}/>
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