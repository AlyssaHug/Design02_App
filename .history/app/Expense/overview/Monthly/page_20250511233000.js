"use client";

import Nav from "@/app/ui/navbar/navbar";
import React from "react";
import styles from "./monthly.module.css";

const weekdays = ["S", "M", "T", "W", "Th", "F", "S"];

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

export default function Page({
    year = new Date().getFullYear(),
    markedDays = {},
}) {
    return (
        <>
            <div className={styles.yearlyCalendar}>
                {months.map((month, monthIdx) => (
                    <div
                        key={month}
                        className={styles.monthSection}>
                        <div className={styles.monthTitle}>{month}</div>
                        <div className={styles.weekdaysRow}>
                            {weekdays.map((day, idx) => (
                                <div
                                    key={idx}
                                    className={styles.weekday}>
                                    {day}
                                </div>
                            ))}
                        </div>
                        <div className={styles.daysGrid}>
                            {[
                                ...Array(getDaysInMonth(year, monthIdx)).keys(),
                            ].map((day) => {
                                const dayNum = day + 1;
                                const key = `${year}-${monthIdx + 1}-${dayNum}`;
                                const isMarked = markedDays[key];
                                return (
                                    <div
                                        key={dayNum}
                                        className={`${styles.dayCircle}${
                                            isMarked ? " " + styles.marked : ""
                                        }`}
                                        title={`${month} ${dayNum}`}>
                                        {dayNum}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
            <Nav />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    );
}
