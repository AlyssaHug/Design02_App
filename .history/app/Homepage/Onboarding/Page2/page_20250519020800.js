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
                            <svg xmlns="http://www.w3.org/2000/svg" width="194" height="40" viewBox="-80 0 194 40" fill="none">
                                <circle cx="6" cy="25" r="6" fill="#15243C"/>
                                <circle cx="37" cy="25" r="6" fill="#A2C1D1"/>
                                <circle cx="67" cy="25" r="6" fill="#A2C1D1"/>
                            </svg>
                            <button
                                onClick={() => window.location.href = '/Homepage/Onboarding/Page3'}
                                style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                            > 
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 20 40" fill="none">
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