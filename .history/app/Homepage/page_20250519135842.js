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
                <div className={styles.HomepageSection}>

                </div>
                <div className={styles.HomepageSection}>
                    
                </div>
                <div className={styles.HomepageSection}>
                    
                </div>
            </div>

        </div>
    );
}