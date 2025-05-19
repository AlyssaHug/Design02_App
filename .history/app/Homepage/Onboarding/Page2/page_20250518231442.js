"use client";
import React from 'react';
import { Libre_Franklin } from 'next/font/google';
import styles from '@/app/Homepage/styles.module.css';
import Button from '@/app/ui/Buttons/Buttons';
import Slider from '@/app/ui/slider/slider';

export default function Page() {
    return (
        <div>
            <div className={styles.Page}>
                <video src="/videos/15c0bb9071bbf7f83931dda9887d7c95cd40274c.mp4"
                className={styles.Video}
                autoPlay
                loop
                muted
                style={{ width: "242.206px", height: "495px" }}
                />
                <header className={styles.footer}>
                    <h1 className={styles.LogoText}>Set money management goals</h1>
                    <p className={styles.SubText}>Set goals for yourself. Whether you’re trying to cut down on spending or save up for a vacation, we’re here to help!</p>
                    <Button
                        style='round'
                        type='outline'
                        color='nav'
                        value='Skip'
                        onClick={() => window.location.href = '/Homepage/NewUserHomepage'}
                    />
                </header>
            </div>
        </div>
    );
}