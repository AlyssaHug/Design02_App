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
            <GoalProgress
                style={styles.goalCard}
                value='Your Goals'
                type='progress'
                percetnage={50}
                size='large'
                icon='goal'
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