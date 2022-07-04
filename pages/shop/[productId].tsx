import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import Layout from '../../components/layout/Layout';
import ProductDto from '../../dto/ProductDto';
import { getProductById } from '../../services/react-query/api.service';
import ProductDetails from '../../components/product-details/ProductDetails';
import styles from '../../styles/shop/Shop.module.css';

const ProductPage = () => {
    const router = useRouter();
    const { productId } = router.query;
    const [searchId, setSearchId] = useState<string>();
    const [product,setProduct] = useState<ProductDto>();
    const { isLoading, isSuccess, data:productData } 
    = useQuery(["productById", searchId], ()=>getProductById(searchId as string));

    useEffect(()=> {
        if(isSuccess) setProduct(productData?.data as ProductDto);
    },[productData]);

    useMemo(()=> {
        if(!productId) return;
        setSearchId(productId as string);
    },[productId, searchId]);

    return (
        <Layout>
            <section className={styles.productDetails}>
                <div className={styles.hero}>
                    <ProductDetails product={product as ProductDto}/>
                </div>
                <div>

                </div>
            </section>
        </Layout>
    );
};

export default ProductPage;