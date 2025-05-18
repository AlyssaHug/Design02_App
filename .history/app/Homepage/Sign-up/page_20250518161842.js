"use client";
import React from "react";
import { Libre_Franklin } from "next/font/google";
import classNames from "classnames";
import Button from "@/app/ui/Buttons/Buttons";
import { useState } from "react";
import Inputs from "@/app/ui/inputs/inputs";
import styles from "@/app/Homepage/styles.module.css";

export default function Page() {
    return (
        <div className={styles.Page}>
            <p className={styles.SubText}>Welcome to</p>
            <h1 className={styles.LogoText}>MoolahMate</h1>
            <p className={styles.SubheadingText}>Email</p>
            <Inputs
                type="text"
                size="login"
                color="light"
            />
            <p className={styles.SubheadingText}>Password</p>
            <Inputs
                type="password"
                size="pass"
                color="light"/>
            <h1 className={styles.AccountTextButton}>8 or more characters, one number, one uppercase letter, one special case character</h1>
            <h1 className={styles.SubheadingText}>Confirm Password</h1>
            <Inputs
                type="password"
                size="login"
                color="light"/>
            <h1 className={styles.SubheadingText}>Username</h1>
            <Inputs
                type="text"
                size="login"
                color="light"/>
            <h1 className={styles.SubheadingText}>By clicking “Get Started,” you agree to our Terms and Conditions and Privacy Policy</h1>
            <Button
                style="round"
                type="primary"
                color="dark"
                value="Get Started!"
            />
            <div className={styles.SignUpContainer}>
            <h1 className={styles.AccountTextButton}>Already have an account?</h1>
            <Button
                style="round"
                type="primary"
                color="light"
                value="Sign in!"
            />
            </div>
        </div>
    )
}