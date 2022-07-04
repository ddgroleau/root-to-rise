import React, { useState } from 'react';
import ProductDto from '../../dto/ProductDto';
import Button from '../button/Button';
import ImageWithFallback from '../image-with-fallback/ImageWithFallback';
import SpecialChar from '../special-char/SpecialChar';
import styles from './ProductDetails.module.css';

type ProductDetailsProps = {
    product:ProductDto
}

const ProductDetails = ({product}:ProductDetailsProps) => {
    const [quantity, setQuantity] = useState<number>(1);
    const handleQuantityChange = (event:any) => {
        const requestedQuantity = event.target.value;
        if(requestedQuantity > product.stockQuantity || requestedQuantity < 0) return;
        setQuantity(requestedQuantity);
    };

    if(!product) return <div>Loading...</div>;
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
                    <Button text="Add to cart" onClick={()=>{}}/>
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
        </section>);
};

export default ProductDetails;