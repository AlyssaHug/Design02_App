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
                        <div className={styles.OnboardingNavigation}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="344" height="40" viewBox="0 0 194 40" fill="none">
                            <circle cx="6" cy="25" r="6" fill="#15243C"/>
                            <circle cx="37" cy="25" r="6" fill="#A2C1D1"/>
                            <circle cx="67" cy="25" r="6" fill="#A2C1D1"/>
                        </svg>
                        <button
                            onClick={() => window.location.href = '/Homepage/Onboarding/Page2'}
                            className={styles.BackButton}> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="440" height="40" viewBox="0 0 20 40" fill="none">
                            <path d="M2.83815 0.00515772C2.17618 0.00385685 1.53465 0.23584 1.02493 0.660847C0.738046 0.900169 0.500906 1.1941 0.327085 1.52578C0.153265 1.85746 0.0461819 2.22039 0.0119689 2.59378C-0.022244 2.96717 0.017086 3.34369 0.127705 3.70176C0.238325 4.05983 0.418058 4.39243 0.656616 4.6805L13.3492 19.9609L1.10992 35.2698C0.874582 35.5614 0.698836 35.8969 0.592786 36.2571C0.486736 36.6173 0.452472 36.995 0.491964 37.3685C0.531456 37.7421 0.643923 38.1041 0.822905 38.4337C1.00189 38.7634 1.24385 39.0542 1.53489 39.2895C1.82803 39.549 2.17131 39.7448 2.5432 39.8645C2.91509 39.9842 3.30755 40.0252 3.69596 39.9851C4.08437 39.9449 4.46033 39.8244 4.80026 39.6311C5.14019 39.4378 5.43675 39.1759 5.67131 38.8618L19.3555 21.7569C19.7722 21.2468 20 20.607 20 19.9466C20 19.2863 19.7722 18.6465 19.3555 18.1364L5.18968 1.03146C4.90546 0.686455 4.54442 0.413735 4.13585 0.235421C3.72728 0.0571063 3.28269 -0.0217854 2.83815 0.00515772Z" fill="#15243C"/>
                            </svg>
                        </button>
                        </div>
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