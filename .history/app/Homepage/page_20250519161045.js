"use client";
import React from 'react';
import Nav from '@/app/ui/navbar/navbar';
import { Libre_Franklin } from 'next/font/google';
import classNames from 'classnames';
import Button from '@/app/ui/Buttons/Buttons';
import { useState } from 'react';
import PageHeader from '@/app/ui/page-headers/page-header';
import styles from './styles.module.css';
import ProgressBar from '../ui/ProgressBar/ProgressBar';

export default function page() {
    return (
        <div className={styles.Homepage}>
            <Nav />
            <PageHeader
                header='homepage_header'
                type='header_title'
                text='Hello, John!'
                showBackButton={false}
                onBack={() => window.history.back()}
            />
            <div className={styles.content}>
                <h1 className={styles.MainSectionText}>Transactions & Expenses</h1>
                    <div className={styles.HomepageSection}>
                        <h3 className={styles.SmallText}>Recent Transactions:</h3>
                            <div className={styles.TransactionList}>
                                <div className={styles.ItemSpacing}>
                                    <div className={styles.TransactionItem}>
                                        <h3 className={styles.SmallText}>Gyukaku - Lunch with friends</h3>
                                    </div>
                                <h3 className={styles.SmallText}>$34.68</h3>
                                </div>
                                <div className={styles.ItemSpacing}>
                                    <div className={styles.TransactionItem}>
                                        <h3 className={styles.SmallText}>Valorant - New bundle skins</h3>
                                    </div>
                                <h3 className={styles.SmallText}>$90.00</h3>    
                                </div>
                                <div className={styles.ItemSpacing}>
                                    <div className={styles.TransactionItem}>
                                        <h3 className={styles.SmallText}>McD - Nugget meal</h3>
                                    </div>
                                <h3 className={styles.SmallText}>$12.57</h3>    
                                </div>
                            </div>
                        <h3 className={styles.SmallText}>Expenses:</h3>
                            <div className={styles.TransactionList}>
                                <div className={styles.ItemSpacing}>
                                    <div className={styles.TransactionItem}>
                                        <h3 className={styles.SmallText}>Aritzia - Babaton Scuplt Knit Dre...</h3>
                                    </div>
                                <h3 className={styles.SmallText}>$32.99</h3>
                                </div>
                                <div className={styles.ItemSpacing}>
                                    <div className={styles.TransactionItem}>
                                        <h3 className={styles.SmallText}>Amazon - Wireless Earbuds</h3>
                                    </div>
                                <h3 className={styles.SmallText}>$24.00</h3>    
                                </div>
                                <div className={styles.ItemSpacing}>
                                    <div className={styles.TransactionItem}>
                                        <h3 className={styles.SmallText}>Spotify - Premium Subscription</h3>
                                    </div>
                                <h3 className={styles.SmallText}>$12.69</h3>    
                                </div>
                            </div>
                        <h3 className={styles.SmallText}>Total this month: $524.85</h3>
                    </div>
                <h1 className={styles.MainSectionText}>Goals & Rewards</h1>
                    <div className={styles.HomepageSection}>
                        <h3 className={styles.SmallText}>Redeemable Rewards!</h3>
                        <div className={styles.ItemSpacing}>
                                <div className={styles.TransactionItem}>
                                        <h3 className={styles.SmallText}>Daily sign-in</h3>
                                    </div>
                                <h3 className={styles.SmallText}>05 Coins</h3>    
                        </div>
                        <div className={styles.ItemSpacing}>
                                <div className={styles.TransactionItem}>
                                        <h3 className={styles.SmallText}>Check on MooMoo</h3>
                                    </div>
                                <h3 className={styles.SmallText}>05 Coins</h3>    
                        </div>

                        <div className={styles.ItemSpacing}>
                        <h3 className={styles.header}>{value}</h3>

                            <Button
                                className={styles.view}
                                color='dark'
                                value='View Goals'
                                href='Goals/ViewGoals'
                            />
                        </div>
                                <ProgressBar
                            value='Goal 1: Reduce spending by $60!'
                            progress={90}
                            goal={100}
                        />
                        <ProgressBar
                            value='Goal 2: Add $50 to tuition fund!'
                            progress={60}
                            goal={100}
                        />
                        <ProgressBar
                            value='Goal 3: Save for a car ($39,000)'
                            progress={30}
                            goal={100}
                            textColor='#4caf50'
                        />
                    </div>
                <h1 className={styles.MainSectionText}>Other Recent Activity</h1>
                    <div className={styles.HomepageSection}>
                        
                    </div>
            </div>

        </div>
    );
}