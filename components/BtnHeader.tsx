import React from 'react';
import styles from '../styles/BtnHeader.module.scss'
import Link from 'next/link';

export default function BtnHeader() {
    return (
        <div className={styles.container}>
            <button className={styles.button} >
                <a href='https://portfolio2024-taupe.vercel.app/' target="_blank">
                    PORTIFÓLIO </a>
            </button>
            <button className={styles.button}>
                <a href='https://www.linkedin.com/in/ricardo-malta/' target="_blank"> 
                    REDES </a>
            </button>
        </div>
    );
}
