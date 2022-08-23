import React, { useEffect, useState } from 'react';
import ToastMessage from '../../models/ToastMessage';
import styles from './Toast.module.scss';
import ToastItem from './ToastItem';

type ToastProps = {
    messages:ToastMessage[];
}

const Toast = ({messages=[]}:ToastProps) => {
    return (
        <section className={styles.container}>
            {messages.map((message)=> {
                return (
                    <ToastItem message={message} key={messages.indexOf(message)} />
                );
            })}
        </section>
    );
};

export default Toast;