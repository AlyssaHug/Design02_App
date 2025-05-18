"use client";
import React from 'react';
import { Libre_Franklin } from 'next/font/google';
import styles from '@/app/Homepage/styles.module.css';

export default function Page() {
    return (
        <div>
            <div className={styles.Page}></div>
            <video src="/videos/dae9316266e0efeceff0c1b3ffcee0efa3f466f4.mp4"
            autoPlay
            loop
            muted
            style={{ width: "100%", height: "auto" }}
            />
        </div>
    );
}