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
                            <button
                                onClick={() => window.location.href = '/Homepage/Onboarding/Page1'}
                                style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                            > 
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="40" viewBox="0 0 20 40" fill="none">
                                <path d="M17.1618 39.9948C17.8238 39.9961 18.4654 39.7642 18.9751 39.3392C19.262 39.0998 19.4991 38.8059 19.6729 38.4742C19.8467 38.1425 19.9538 37.7796 19.988 37.4062C20.0222 37.0328 19.9829 36.6563 19.8723 36.2982C19.7617 35.9402 19.5819 35.6076 19.3434 35.3195L6.65081 20.0391L18.8901 4.73019C19.1254 4.43859 19.3012 4.10305 19.4072 3.74288C19.5133 3.38271 19.5475 3.005 19.508 2.63146C19.4685 2.25793 19.3561 1.89592 19.1771 1.56626C18.9981 1.23661 18.7561 0.945788 18.4651 0.710531C18.172 0.451002 17.8287 0.255243 17.4568 0.13554C17.0849 0.0158368 16.6924 -0.0252256 16.304 0.0149279C15.9156 0.0550813 15.5397 0.175585 15.1997 0.368876C14.8598 0.562166 14.5633 0.824071 14.3287 1.13815L0.644503 18.2431C0.227797 18.7532 -5.51009e-06 19.393 -5.56782e-06 20.0534C-5.62554e-06 20.7137 0.227797 21.3535 0.644503 21.8636L14.8103 38.9685C15.0945 39.3135 15.4556 39.5863 15.8641 39.7646C16.2727 39.9429 16.7173 40.0218 17.1618 39.9948Z" fill="#15243C"/>
                                </svg>
                            </button>
                            <div className={styles.PagesNavigation}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="194" height="40" viewBox="-30 0 194 40" fill="none">
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