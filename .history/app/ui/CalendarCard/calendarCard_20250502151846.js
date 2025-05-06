import { useState } from "react";
import Dropdown from "@/app/ui/dropdown/dropdown";
import styles from "./calendarCard.module.css";

const transactions = [
    {
        time: "12:20pm",
        category: "Dine...",
        merchant: "Gyukaku",
        amount: "34.68",
        description: "Lunch with friends",
    },
    {
        time: "8:00am",
        category: "Groc...",
        merchant: "Walmart",
        amount: "52.10",
        description: "Weekly groceries",
    },
    {
        time: "10:30am",
        category: "Misc...",
        merchant: "Bus",
        amount: "2.00",
        description: "Bus fare",
    },
    // Add more here
];

export default function CalendarCard() {
    return (
        <div>
            {/* Render all hardcoded cards */}
            {transactions.map(
                (time, category, merchant, amount, description) => (
                    <div
                        className={styles.container}
                        key={time}>
                        <span className={styles.time}>{time}</span>
                        <span className={styles.card}>
                            <span className={styles.category}>{category}</span>
                            <div className={styles.details}>
                                <span>
                                    <b>{merchant}</b> - ${amount}
                                </span>

                                <span>{description}</span>
                            </div>
                        </span>
                    </div>
                )
            )}
        </div>
    );
}
