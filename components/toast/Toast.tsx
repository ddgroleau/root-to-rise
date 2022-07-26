import React, { useEffect, useState } from 'react';
import ToastMessage from '../../models/ToastMessage';
import styles from './Toast.module.css';
import ToastItem from './ToastItem';

type ToastProps = {
    messages:ToastMessage[];
    messageHandler:React.Dispatch<React.SetStateAction<ToastMessage[]>>;
}

const Toast = ({messages=[], messageHandler}:ToastProps) => {
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