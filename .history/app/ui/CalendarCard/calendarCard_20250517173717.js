"use client";
import ToggleButton from "@/app/ui/Buttons/ToggleButton";
import styles from "@/app/ui/CalendarCard/calendarCard.module.css";
import Button from "@/app/ui/Buttons/Buttons";
import leftArrow from "@/public/left_arrow.svg";
import rightArrow from "@/public/right_arrow.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CalendarCard({ month, amount, prevMonth, nextMonth }) {
    // instead of page, name the props prevMonth, nextMonth
    const router = useRouter();
    const [isMonthly, setIsMonthly] = useState(true);

    const navigateToMonth = (month) => {
        router.push(month);
    };

    const handleToggle = (isMonthlyView) => {
        setIsMonthly(isMonthlyView);
    };

    return (
        <div className={styles.container}>
            <div className={styles.headerRow}>
                <span className={styles.backArrow}></span>
                <ToggleButton onToggle={handleToggle} />
            </div>
            <div className={styles.pill}>
                {isMonthly ? "Transactions This Month" : "All Transactions"}
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
                {isMonthly ? "This Month!" : "All Time!"}
            </div>
        </div>
    );
}
