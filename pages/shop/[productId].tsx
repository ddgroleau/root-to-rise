import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import Layout from '../../components/layout/Layout';
import ProductDto from '../../dto/ProductDto';
import { getProductById } from '../../services/react-query/api.service';
import ProductDetails from '../../components/product-details/ProductDetails';
import styles from '../../styles/shop/Shop.module.css';
import InteractiveDetails from '../../components/interactive-details/InteractiveDetails';

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

    if(!product) return <div>Loading...</div>;
    return (
        <Layout metaDescription="All natural tinctures, salves and herbal remedies" 
            pageTitle={`${product.name} | Root to Rise Botanicals`}>
            <section className={styles.productDetails}>
                <div className={styles.hero}>
                    <ProductDetails product={product as ProductDto}/>
                </div>
                <div>
                    <InteractiveDetails 
                        titles={["Ingredients","Uses and Instructions", "Disclaimer and Safety"]}
                        details={[
                            product?.ingredients.map(ingredient => 
                                `${ingredient.name}${!ingredient.alternateName ? 
                                    "" : ` (${ingredient.alternateName})`}`)
                                .join(", ") as string,
                            `${product?.instructions} 
                             We honor that you know your body and needs, 
                             please follow a dosage or routine that resonates best for you.` as string,
                            `${product?.disclaimer}
                            *These statements have not been evaluated by the Food and Drug Administration.
                            These products are not intended to diagnose, treat, cure, 
                            or prevent any diseases.` as string
                        ]}
                    />
                </div>
            </section>
        </Layout>
    );
};

export default ProductPage;