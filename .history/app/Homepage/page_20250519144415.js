"use client";
import React from 'react';
import Nav from '@/app/ui/navbar/navbar';
import { Libre_Franklin } from 'next/font/google';
import classNames from 'classnames';
import Button from '@/app/ui/Buttons/Buttons';
import { useState } from 'react';
import PageHeader from '@/app/ui/page-headers/page-header';
import styles from './styles.module.css';
import GoalProgress from '../ui/GoalCards/GoalCards';

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
                                <div className={styles.TransactionItem}>
                                    <h3 className={styles.SmallText}>Starbucks</h3>
                                    <h3 className={styles.SmallText}>$5.00</h3>
                                </div>
                                <div className={styles.TransactionItem}>
                                    <h3 className={styles.SmallText}>Amazon</h3>
                                    <h3 className={styles.SmallText}>$50.00</h3>
                                </div>
                            </div>
                        <h3 className={styles.SmallText}>Expenses:</h3>
                        <h3 className={styles.SmallText}>Total this month: $524.85</h3>
                    </div>
                <h1 className={styles.MainSectionText}>Goals & Rewards</h1>
                    <div className={styles.HomepageSection}>
                        <h3 className={styles.SmallText}>Redeemable Rewards!</h3>
                    </div>
                <h1 className={styles.MainSectionText}>Other Recent Activity</h1>
                    <div className={styles.HomepageSection}>
                        
                    </div>
            </div>

        </div>
    );
}