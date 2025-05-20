"use client";
import React from 'react';
import { Libre_Franklin } from 'next/font/google';
import styles from '@/app/Homepage/styles.module.css';
import Button from '@/app/ui/Buttons/Buttons';

export default function Page() {
    return (
        <div>
            <div className={styles.Page}>
                <video src="/videos/dae9316266e0efeceff0c1b3ffcee0efa3f466f4.mp4"
                className={styles.Video}
                autoPlay
                loop
                muted
                style={{ width: "242.206px", height: "495px" }}
                />
                <header className={styles.footer}>
                    <h1 className={styles.LogoText}>Track your expenses</h1>
                </header>
            </div>
        </div>
    );
}