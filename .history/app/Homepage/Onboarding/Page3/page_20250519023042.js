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
                   <div className={styles.GetStartedButton}>
                    <div className={styles.OnboardingNavigation}>
                            <div className={styles.PagesNavigation}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="194" height="40" viewBox="-100 0 194 40" fill="none">
                                <circle cx="6" cy="25" r="6" fill="#15243C"/>
                                <circle cx="37" cy="25" r="6" fill="#A2C1D1"/>
                                <circle cx="67" cy="25" r="6" fill="#A2C1D1"/>
                            </svg>
                            </div>
                    </div>
                   <Button
                    style='round'
                    type='outline'
                    color='dark'
                    value='Get Started!'
                    onClick={() => window.location.href = '/Homepage/NewUserHomepage'}
                    /> 
                    </div>
                </header>
            </div>
        </div>
    );
}