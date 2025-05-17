'use client';
import React from 'react';
import Button from '@/app/ui/Buttons/Buttons';
import { Libre_Franklin } from 'next/font/google';
import classNames from 'classnames';
import styles from '@/app/Homepage/Start/styles.module.css';

export default function Page() {
    return (
        <div>
            <h1 className={styles.logotext}>MoolahMate</h1>
            <p className={styles.paragraph}>Welcome to a new way of money management. An easier, less stressful alternative made for you!</p>
            <Button 
            
            />
            <Button
            />
        </div>
    );
}