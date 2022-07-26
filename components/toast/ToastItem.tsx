import React, { useEffect, useState } from 'react';
import ToastMessage from '../../models/ToastMessage';
import styles from './Toast.module.css';

type ToastItemProps = {
    message:ToastMessage;
}

const ToastItem = ({message}:ToastItemProps) => {
    const [isMounted, setIsMounted] = useState(true);

    useEffect(()=> {
        const UNMOUNT_DELAY_MS = 2000;
        if(isMounted) {
            setTimeout(()=>{
                setIsMounted(false);
            },UNMOUNT_DELAY_MS);
        }
    },[]);

    return (
        <div 
            className={`
            ${styles.message} 
            ${message.isSuccess ? styles.success : styles.error} 
            ${isMounted ? styles.fadeInUp : styles.fadeOutDown}
            `}
        >
            {message.message}
        </div>
    );
};

export default ToastItem;