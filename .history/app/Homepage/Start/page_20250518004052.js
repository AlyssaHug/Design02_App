'use client';
import React from 'react';
import Button from '@/app/ui/Buttons/Buttons';
import { Libre_Franklin } from 'next/font/google';
import classNames from 'classnames';
import styles from '@/app/Homepage/styles.module.css';

export default function Page() {
    return (
        <div className={styles.Page}>
            <div className={styles.Start_Container}
            <h1 className={styles.LogoText}>MoolahMate</h1>
            <p className={styles.SubText}>Welcome to a new way of money management. An easier, less stressful alternative made for you!</p>
            <Button 
            style='round'
            type='primary'
            color='light'
            value='Sign up now!'
            />
            </div>
            <Button
            style='round'
            type='primary'
            color='dark'
            value='Sign in'
            />
        </div>
    );
}