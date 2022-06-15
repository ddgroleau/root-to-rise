import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/layout/Layout';

const ProductDetails = () => {
    const router = useRouter();
    const { productId } = router.query;
    return (
        <Layout>
            <div>This is where the product details will show up. {productId}</div>
        </Layout>
    );
};

export default ProductDetails;