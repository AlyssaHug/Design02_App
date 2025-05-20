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
                        <h3 className={styles.HeadingText}>Recent Transactions:</h3>
                            <div className={styles.TransactionList}>
                                <div className={styles.ItemSpacing}>
                                    <div className={styles.TransactionItem}>
                                        <h3 className={styles.SmallText}>Gyukaku - Lunch with friends</h3>
                                    </div>
                                <h3 className={styles.PriceText}>$34.68</h3>
                                </div>
                                <div className={styles.ItemSpacing}>
                                    <div className={styles.TransactionItem}>
                                        <h3 className={styles.SmallText}>Valorant - New bundle skins</h3>
                                    </div>
                                <h3 className={styles.PriceText}>$90.00</h3>    
                                </div>
                                <div className={styles.ItemSpacing}>
                                    <div className={styles.TransactionItem}>
                                        <h3 className={styles.SmallText}>McD - Nugget meal</h3>
                                    </div>
                                <h3 className={styles.PriceText}>$12.57</h3>    
                                </div>
                            </div>
                        <h3 className={styles.HeadingText}>Expenses:</h3>
                            <div className={styles.TransactionList}>
                                <div className={styles.ItemSpacing}>
                                    <div className={styles.TransactionItem}>
                                        <h3 className={styles.SmallText}>Aritzia - Babaton Scuplt Knit Dre...</h3>
                                    </div>
                                <h3 className={styles.PriceText}>$32.99</h3>
                                </div>
                                <div className={styles.ItemSpacing}>
                                    <div className={styles.TransactionItem}>
                                        <h3 className={styles.SmallText}>Amazon - Wireless Earbuds</h3>
                                    </div>
                                <h3 className={styles.PriceText}>$24.00</h3>    
                                </div>
                                <div className={styles.ItemSpacing}>
                                    <div className={styles.TransactionItem}>
                                        <h3 className={styles.SmallText}>Spotify - Premium Subscription</h3>
                                    </div>
                                <h3 className={styles.PriceText}>$12.69</h3>    
                                </div>
                            </div>
                        <h3 className={styles.HeadingText}>Total this month: $524.85</h3>
                        <button className={styles.MoreDetailsButton}>
                            <h3 className={styles.SmallText}
                            onClick={() => window.location.href = '/Expense/Sign-In'}
                            >More Details.....</h3>
                        </button>
                    </div>
                <h1 className={styles.MainSectionText}>Goals & Rewards</h1>
                    <div className={styles.HomepageSection}>
                        <h3 className={styles.HeadingText}>Redeemable Rewards!</h3>
                        <div className={styles.ItemSpacing}>
                                <div className={styles.TransactionItem}>
                                        <h3 className={styles.SmallText}>Daily sign-in</h3>
                                    </div>
                                <h3 className={styles.PriceText}>05 Coins</h3>    
                        </div>
                        <div className={styles.ItemSpacing}>
                                <div className={styles.TransactionItem}>
                                        <h3 className={styles.SmallText}>Check on MooMoo</h3>
                                    </div>
                                <h3 className={styles.PriceText}>05 Coins</h3>    
                        </div>
                        <div className={styles.ItemSpacing}>
                        <h3 className={styles.HeadingText}>Goal Progess</h3>
                            <div className={styles.ButtonLength}>
                            <Button
                                className={styles.view}
                                color='dark'
                                value='View Goals'
                                href='Goals/ViewGoals'
                            />
                            </div>
                        </div>
                        <div className={styles.ItemLength}>
                        <ProgressBar
                            value='Goal 1: Reduce spending by $60!'
                            progress={90}
                            goal={100}
                        />
                        </div>
                        <div className={styles.ItemLength}>
                        <ProgressBar
                            value='Goal 2: Add $50 to tuition fund!'
                            progress={60}
                            goal={100}
                        />
                        </div>
                        <div className={styles.ItemLength}>
                        <ProgressBar
                            value='Goal 3: Save for a car ($39,000)'
                            progress={30}
                            goal={100}
                            textColor='#4caf50'
                        />
                        </div>
                        <button className={styles.MoreDetailsButton}>
                            <h3 className={styles.SmallText}>More Details.....</h3>
                        </button>
                    </div>
                <h1 className={styles.MainSectionText}>Other Recent Activity</h1>
                    <div className={styles.HomepageSection}>
                        <div className={styles.TransactionItem}>
                            <h3 className={styles.SmallText}>Added customization to MooMoo</h3>
                        </div>
                        <div className={styles.TransactionItem}>
                            <h3 className={styles.SmallText}>Added $ 2.00 to the total balance</h3>
                        </div>
                        <div className={styles.TransactionItem}>
                            <h3 className={styles.SmallText}>Added a new goal to the list</h3>
                        </div>
                        <div className={styles.TransactionItem}>
                            <h3 className={styles.SmallText}>Added a transfer of $ 20.00</h3>
                        </div>
                        <button className={styles.MoreDetailsButton}>
                            <h3 className={styles.SmallText}>More Details.....</h3>
                        </button>
                    </div>
            </div>

        </div>
    );
}