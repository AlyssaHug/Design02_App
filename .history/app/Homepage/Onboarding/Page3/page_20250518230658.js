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
                <video src="/videos/871587098232e1dd9881ba1bac104a466a4b074d.mp4"
                className={styles.Video}
                autoPlay
                loop
                muted
                style={{ width: "242.206px", height: "495px" }}
                />
                <header className={styles.footer}>
                    <h1 className={styles.LogoText}>See your transactions and activity</h1>
                    <p className={styles.SubText}>Whether it’s bills, transactions between friends, or shopping sprees, we’ve got your back with our itemized calendars and list customized for you!</p>
                   <Button
                    style='round'
                    type='outline'
                    color='nav'
                    value='Next'
                    onClick={() => window.location.href = '/Homepage/Onboarding/Page4'}
                    /> 
                </header>
            </div>
        </div>
    );
}