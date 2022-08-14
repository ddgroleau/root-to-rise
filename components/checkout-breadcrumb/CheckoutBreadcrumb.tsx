import { useRouter } from 'next/router';
import React from 'react';
import Button from '../button/Button';
import StripeLogo from '../stripe-logo/StripeLogo';
import styles from './CheckoutBreadcrumb.module.css';

type CheckoutBreadcrumbProps = {
    btnText:string;
    link:string;
}

const CheckoutBreadcrumb = ({btnText,link}:CheckoutBreadcrumbProps) => {
    const router = useRouter();
    return (
        <div className={styles.btn}>
            <Button text={btnText} onClick={()=>router.push(link)} />
            <StripeLogo/>
        </div>
    );
};

export default CheckoutBreadcrumb;