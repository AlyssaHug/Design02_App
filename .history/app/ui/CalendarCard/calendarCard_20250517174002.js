"use client";
import ToggleButton from "@/app/ui/Buttons/ToggleButton";
import styles from "@/app/ui/CalendarCard/calendarCard.module.css";
import Button from "@/app/ui/Buttons/Buttons";
import leftArrow from "@/public/left_arrow.svg";
import rightArrow from "@/public/right_arrow.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CalendarCard({ month, amount, prevMonth, nextMonth }) {
    const router = useRouter();
    const [isDates, setIsDates] = useState(true);

    const navigateToMonth = (month) => {
        if (!month) return; // Don't navigate if month is not provided
        const path = `/Expense/overview/Weekly/${month}`;
        router.push(path);
    };

    const handleToggle = (isDatesView) => {
        setIsDates(isDatesView);
        if (isDatesView) {
            // Navigate to MonthlyView when Dates is selected
            router.push("/Expense/overview/MonthlyView");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.headerRow}>
                <span className={styles.backArrow}></span>
                <ToggleButton onToggle={handleToggle} />
            </div>
            <div className={styles.pill}>
                {isDates ? "View by Dates" : "View by Transactions"}
            </div>
            <div className={styles.monthRow}>
                <div className={styles.arrowLeft}>
                    <Button
                        imageSrc='/left_arrow.svg'
                        onClick={() => navigateToMonth(prevMonth)}
                    />
                </div>
                <span className={styles.month}>{month}</span>
                <div className={styles.arrowRight}>
                    <Button
                        imageSrc='/right_arrow.svg'
                        onClick={() => navigateToMonth(nextMonth)}
                    />
                </div>
            </div>
            <div className={styles.spentLabel}>You've Earned:</div>
            <div className={styles.amount}>${amount}</div>
            <div className={styles.thisMonth}>
                {isDates ? "View by Dates" : "View by Transactions"}
            </div>
        </div>
    );
}
