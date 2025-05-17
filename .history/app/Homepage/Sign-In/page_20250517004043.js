"use client";
import React from 'react';
import Nav from '../../ui/navbar/navbar';
import { Libre_Franklin } from 'next/font/google';
import classNames from 'classnames';
import Button from '@/app/ui/Buttons/Buttons';
import { useState } from 'react';
import PageHeader from '../../ui/page-headers/page-header';
import styles from '@/app/Homepage/styles.module.css';
import { useRouter } from 'next/navigation';
import Inputs from '@/app/ui/inputs/inputs';

export default function Page() {
    return (
        <div className={styles.homepage}>
            <h1 className={styles.logotext}>MoolahMate</h1>
            <p className={styles.SmallText}>Welcome Back!</p>
            <p className={styles.SmallText}>Email</p>
            <Inputs
                type="text"
                size="login"
                color="light"
                />
            <p className={styles.SmallText}>Password</p>
            <Inputs
                type="password"
                size="login"
                color="light"
                />
            <h1 className={styles.AlternativeText}>Forget your password?</h1>
            <Button
                style="round"
                type="primary"
                color="dark"
                value="Login"
                />
            <h1 className={styles.AlternativeText}>Don't have an account?</h1>
            <Button
                style="round"
                type="primary"
                color="light"
                value="Sign up!"
            />
        </div>
    );
}