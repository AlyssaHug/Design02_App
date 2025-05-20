"use client";
import React from 'react';
import Nav from '../../ui/navbar/navbar';
import { Libre_Franklin } from 'next/font/google';
import classNames from 'classnames';
import Button from '@/app/ui/Buttons/Buttons';
import { useState } from 'react';
import PageHeader from '../../ui/page-headers/page-header';
import styles from '@/app/Homepage/NewUserHomepage/styles.module.css';
export default function Page() {
  return (
    <div className={styles.homepage}>
    <PageHeader
      type='homepage_title'
      header='homepage_header'
      text='Welcome, Username!'
      />
    </div>
  );
}

