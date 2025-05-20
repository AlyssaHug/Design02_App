"use client";
import React from 'react';
import Nav from '../../ui/navbar/navbar';
import { Libre_Franklin } from 'next/font/google';
import classNames from 'classnames';
import Button from '@/app/ui/Buttons/Buttons';
import { useState } from 'react';
import PageHeader from '../../ui/page-headers/page-header';
import styles from '@/app/Homepage/styles.module.css';
import ProgressBar from '@/app/ui/ProgressBar/ProgressBar';

export default function Page() {
  return (
        <div className={styles.Homepage}>
            <Nav />
            <PageHeader
                header='homepage_header'
                type='header_title'
                text='Welcome, Username!'
                showBackButton={false}
                showBalance={true}
                balance="$0.00"
                onBack={() => window.history.back()}
            />
            <div className={styles.content}>
                <h1 className={styles.MainSectionText}>Transactions & Expenses</h1>
                    <div className={styles.HomepageSection}>
                        <h3 className={styles.HeadingText}>No Transactions or Expenses yet</h3>
                            <div className={styles.TransactionList}>
                                <div className={styles.ItemSpacing}>
                                    <button className={styles.AddTransactionItem}
                                    onClick={() => window.location.href = '/Expense/AddExpense'}>
                                        <h3 className={styles.SmallText}>Add a transaction or view expense</h3>
                                    </button>
                                </div>
                            </div>
                        <h3 className={styles.HeadingText}>Total: $0.00</h3>
                        <button className={styles.MoreDetailsButton}>
                            <h3 className={styles.SmallText}
                            onClick={() => window.location.href = '/Expense'}
                            >More Details.....</h3>
                        </button>
                    </div>
                <h1 className={styles.MainSectionText}>Goals & Rewards</h1>
                    <div className={styles.HomepageSection}>
                        <h3 className={styles.HeadingText}>Setup your Account:</h3>
                        <div className={styles.ItemLength}>
                        <ProgressBar
                            value='Add your First Expense:'
                            progress={0}
                            goal={1}
                            textColor='#4caf50'
                        />
                        <Button
                            value='Start Now'
                            color='light'
                            href='/Expense/AddExpenses'
                            style='round'
                        />
                        </div>
                        <div className={styles.ItemLength}>
                        <ProgressBar
                            value='Add your First Goal:'
                            progress={0}
                            goal={1}
                            textColor='#4caf50'
                        />
                        <Button
                            value='Start Now'
                            color='light'
                            href='/Goals/Create'
                            style='round'
                        />
                        </div>
                        <div className={styles.ItemLength}>
                        <ProgressBar
                            value='Setup Cow Customization'
                            progress={0}
                            goal={1}
                            textColor='#4caf50'
                        />
                        <Button
                            value='Start Now'
                            color='light'
                            href='/Cow/Customize'
                            style='round'
                        />
                        </div>
                        <button className={styles.MoreDetailsButton}>
                            <h3 className={styles.SmallText}
                            onClick={() => window.location.href = '/Goals'}
                            >More Details.....</h3>
                        </button>
                    </div>
                <h1 className={styles.MainSectionText}>Other Recent Activity</h1>
                    <div className={styles.HomepageSection}>
                        <h3 className={styles.SmallText}>Here you will see your recent spending's or actions with your MoolahMate account. </h3>
                        <button className={styles.MoreDetailsButton}>
                            <h3 className={styles.SmallText}
                                onClick={() => window.location.href = '/Expense'}
                                >More Details.....</h3>
                        </button>
                    </div>
            </div>

        </div>
  );
}

