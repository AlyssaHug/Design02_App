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
        <div className={styles.Page}>
            <div className={styles.SignInContainer}>
                <h1 className={styles.LogoText}>MoolahMate</h1>
                <p className={styles.SubText}>Welcome Back!</p>
                <p className={styles.SubheadingText}>Email</p>
            </div>
            <Inputs
                type="text"
                size="login"
                color="light"
                />
            <p className={styles.SubheadingText}>Password</p>
            <Inputs
                type="password"
                size="pass"
                color="light"
                />
            <button className={styles.ButtonText}>Forget your password?</button>
            <Button
                style="round"
                type="primary"
                color="dark"
                value="Login"
                />
            <button className={styles.ButtonText}>Don't have an account?</button>
            <Button
                style="round"
                type="primary"
                color="light"
                value="Sign up!"
            />
        </div>
    );
}