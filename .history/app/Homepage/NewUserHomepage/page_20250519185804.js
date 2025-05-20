"use client";
import React from 'react';
import Nav from '../../ui/navbar/navbar';
import { Libre_Franklin } from 'next/font/google';
import classNames from 'classnames';
import Button from '@/app/ui/Buttons/Buttons';
import { useState } from 'react';
import PageHeader from '../../ui/page-headers/page-header';
import styles from '@/app/Homepage/styles.module.css';
import ProgressBar from '@/app/ui/ProgressBar/ProgressBar';

export default function Page() {
  return (
    <div className={styles.homepage}>
    <PageHeader
      type='header_title'
      header='homepage_header'
      text='Welcome, Username!'
      />
    
    <h1 className={styles.MainSectionText}>Transactions & Expenses</h1>
    <h1 className={styles.MainSectionText}>Goals & Rewards</h1>
    <h1 className={styles.MainSectionText}>Other Recent Activity</h1>
    </div>
  );
}

