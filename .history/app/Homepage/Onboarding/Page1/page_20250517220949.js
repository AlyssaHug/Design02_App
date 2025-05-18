"use client";
import React from 'react';
import { Libre_Franklin } from 'next/font/google';
import classNames from 'classnames';

export default function Page() {
    return (
        <video src='Video1.mp4' autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover" />
    );
}