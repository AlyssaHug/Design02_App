"use client";
import ToggleButton from "@/app/ui/Buttons/ToggleButton";
import styles from "@/app/ui/CalendarCard/calendarCard.module.css";
import Button from "@/app/ui/Buttons/Buttons";
import leftArrow from "@/public/left_arrow.svg";
import rightArrow from "@/public/right_arrow.svg";
import { useRouter } from "next/navigation";

export default function CalendarCard({ month, amount, prevPage, nextPage }) {
    const router = useRouter();

    const handlePrevClick = () => {
        router.push(`/Expense/overview/Weekly/${getPreviousMonth(month)}`);
    };

    const handleNextClick = () => {
        router.push(`/Expense/overview/Weekly/${getNextMonth(month)}`);
    };

    const getPreviousMonth = (currentMonth) => {
        const months = {
            January: "December",
            February: "January",
            March: "February",
            April: "March",
            May: "April",
            June: "May",
            July: "June",
            August: "July",
            September: "August",
            October: "September",
            November: "October",
            December: "November",
        };
        return months[currentMonth];
    };

    const getNextMonth = (currentMonth) => {
        const months = {
            January: "February",
            February: "March",
            March: "April",
            April: "May",
            May: "June",
            June: "July",
            July: "August",
            August: "September",
            September: "October",
            October: "November",
            November: "December",
            December: "January",
        };
        return months[currentMonth];
    };

    return (
        <div className={styles.container}>
            <div className={styles.headerRow}>
                <span className={styles.backArrow}></span>
                <ToggleButton />
            </div>
            <div className={styles.pill}>TransactionsThis Month</div>
            <div className={styles.monthRow}>
                <div className={styles.arrowLeft}>
                    <Button
                        imageSrc={leftArrow}
                        onClick={handlePrevClick}
                        alt='Previous month'
                    />
                </div>
                <span className={styles.month}>{month}</span>
                <div className={styles.arrowRight}>
                    <Button
                        imageSrc={rightArrow}
                        onClick={handleNextClick}
                        alt='Next month'
                    />
                </div>
            </div>
            <div className={styles.spentLabel}>You've Earned:</div>
            <div className={styles.amount}>${amount}</div>
            <div className={styles.thisMonth}>This Month!</div>
        </div>
    );
}
