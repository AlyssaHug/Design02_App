'use client';
import React from 'react';
import Button from '@/app/ui/Buttons/Buttons';
import { Libre_Franklin } from 'next/font/google';
import classNames from 'classnames';
import styles from '@/app/Homepage/styles.module.css';

export default function Page() {
    return (
        <div className={styles.Page}>
            <div className={styles.StartContainer}>
                <img src='/gifs/moodance.gif'></img>
                <h1 className={styles.LogoText}>MoolahMate</h1>
                <p className={styles.SubText}>Welcome to a new way of money management. An easier, less stressful alternative made for you!</p>
                <Button 
                style='round'
                type='primary'
                color='light'
                value='Sign up now!'
                onClick={() => window.location.href = '/Homepage/Sign-Up'}
                />
            </div>
            <Button
            style='round'
            type='primary'
            color='dark'
            value='Sign in'
            onClick={() => window.location.href = '/Homepage/Sign-In'}
            />
        </div>
    );
}