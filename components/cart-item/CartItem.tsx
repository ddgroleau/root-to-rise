import Image from 'next/image';
import React, { ChangeEventHandler, HtmlHTMLAttributes, MouseEventHandler } from 'react';
import CartProductDto from '../../dto/CartProductDto';
import ProductDto from '../../dto/ProductDto';
import Button from '../button/Button';
import ImageWithFallback from '../image-with-fallback/ImageWithFallback';
import QuantitySizeInputs from '../quantity-size-inputs/QuantitySizeInputs';
import SpecialChar from '../special-char/SpecialChar';
import styles from './CartItem.module.scss';

type CartItemProps = {
    item:CartProductDto;
    handleQuantityChange: ChangeEventHandler<HTMLInputElement>;
    handleRemoveItem: MouseEventHandler<HTMLButtonElement>;
}

const CartItem = ({item,handleQuantityChange,handleRemoveItem}:CartItemProps) => {
    return (
        <div className={styles.container}>
            <section className={styles.img}>
                <ImageWithFallback
                    src={"/" + item.imagePath}
                    fallbackSrc="/product_tummy-tamer.png"
                    height={200}
                    width={150}
                    alt="Product Image" 
                />
            </section>
            <section className={styles.details}>
                <div className={styles.header}>
                    <h2>{item.name}</h2>
                    <span><SpecialChar>$</SpecialChar>{item.price.toFixed(2)}</span>
                </div>
                <div>
                    <div className={styles.inputs}>
                        <QuantitySizeInputs 
                            quantity={item.quantity}
                            handleQuantityChange={handleQuantityChange}
                            product={item}
                        />
                    </div>
                    <div className={styles.btn}>
                        <Button text="REMOVE" onClick={handleRemoveItem} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CartItem;