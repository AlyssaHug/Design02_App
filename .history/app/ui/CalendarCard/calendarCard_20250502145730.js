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
        category: "Groceries",
        merchant: "Walmart",
        amount: "52.10",
        description: "Weekly groceries",
    },
    // Add more here
];

export default function CalendarCard() {
    return (
        <div>
            {/* Render all hardcoded cards */}
            {transactions.map((tx, i) => (
                <div
                    className={styles.container}
                    key={i}>
                    <span className={styles.time}>{tx.time}</span>
                    <span className={styles.card}>
                        <span className={styles.category}>{tx.category}</span>
                        <div className={styles.details}>
                            <span>
                                <b>{tx.merchant}</b> - ${tx.amount}
                            </span>
                            <br />
                            <span>{tx.description}</span>
                        </div>
                    </span>
                </div>
            ))}
        </div>
    );
}
