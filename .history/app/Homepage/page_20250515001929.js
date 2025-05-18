"use client";
import React from 'react';
import styles from '@/app/Homepage/styles.module.css';
import Nav from '../ui/navbar/navbar';
import { Libre_Franklin } from 'next/font/google';
import classNames from 'classnames';
import Button from '@/app/ui/Buttons/Buttons';
import { useState } from 'react';
import PageHeader from '../ui/page-headers/page-header';
function page() {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <p>This is the main page of our application.</p>
    </div>
  );
}