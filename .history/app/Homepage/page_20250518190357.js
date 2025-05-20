"use client";
import React from 'react';
import Nav from '@/app/ui/navbar/navbar';
import { Libre_Franklin } from 'next/font/google';
import classNames from 'classnames';
import Button from '@/app/ui/Buttons/Buttons';
import { useState } from 'react';
import PageHeader from '@/app/ui/page-headers/page-header';
import styles from './styles.module.css';

export default function page() {
    return (
        <div className={styles.Page}>
            <Nav />
            <PageHeader
                header='homepage_header'
                type='header_title'
                showBackButton={false}
                onBack={() => window.history.back()}
            />
            <div className={styles.content}>
                <Button
                    className={styles.view}
                    color='dark'
                    value='Create Goal'
                    href='/Goals/GoalRecs'
                />
            </div>

        </div>
    );
}