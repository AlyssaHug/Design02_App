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
                <video src="/videos/dae9316266e0efeceff0c1b3ffcee0efa3f466f4.mp4"
                className={styles.Video}
                autoPlay
                loop
                muted
                style={{ width: "242.206px", height: "495px" }}
                />
                <header className={styles.footer}>
                    <h1 className={styles.LogoText}>Track your expenses</h1>
                    <p className={styles.SubText}>With the help of MooMoo, safely manage and track your expenses with zero stress!</p>
                    <div className={styles.GetStartedButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="194" height="40" viewBox="0 0 194 40" fill="none">
                        <circle cx="6" cy="25" r="6" fill="#15243C"/>
                        <circle cx="37" cy="25" r="6" fill="#A2C1D1"/>
                        <circle cx="67" cy="25" r="6" fill="#A2C1D1"/>
                        <button>
                        <path d="M176.838 0.00515772C176.176 0.00385685 175.535 0.23584 175.025 0.660847C174.738 0.900169 174.501 1.1941 174.327 1.52578C174.153 1.85746 174.046 2.22039 174.012 2.59378C173.978 2.96717 174.017 3.34369 174.128 3.70176C174.238 4.05983 174.418 4.39243 174.657 4.6805L187.349 19.9609L175.11 35.2698C174.875 35.5614 174.699 35.8969 174.593 36.2571C174.487 36.6173 174.452 36.995 174.492 37.3685C174.531 37.7421 174.644 38.1041 174.823 38.4337C175.002 38.7634 175.244 39.0542 175.535 39.2895C175.828 39.549 176.171 39.7448 176.543 39.8645C176.915 39.9842 177.308 40.0252 177.696 39.9851C178.084 39.9449 178.46 39.8244 178.8 39.6311C179.14 39.4378 179.437 39.1759 179.671 38.8618L193.355 21.7569C193.772 21.2468 194 20.607 194 19.9466C194 19.2863 193.772 18.6465 193.355 18.1364L179.19 1.03146C178.905 0.686455 178.544 0.413735 178.136 0.235421C177.727 0.0571063 177.283 -0.0217854 176.838 0.00515772Z" fill="#15243C"/>
                        </svg>
                        </button>
                    <Button
                    style='round'
                    type='outline'
                    color='nav'
                    value='Skip'
                    onClick={() => window.location.href = '/Homepage/NewUserHomepage'}
                    />
                    </div>
                </header>
            </div>
        </div>
    );
}