"use client";
import React from 'react';
import { Libre_Franklin } from 'next/font/google';
import classNames from 'classnames';
import Button from '@/app/ui/Buttons/Buttons';
import { useState } from 'react';
import PageHeader from '../../ui/page-headers/page-header';
import styles from './styles.module.css';

export default function page() {
    return (
        <div className={styles.page}>
            <Nav />
            <PageHeader
                title='Welcome to da homepage'
                description='This is the homepage of the app'
            />
            <div className={styles.content}>
                <h1>Welcome to da homepage</h1>
                <p>This is the homepage of the app</p>
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