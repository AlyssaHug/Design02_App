"use client";
import ToggleButton from "@/app/ui/Buttons/ToggleButton";
import styles from "@/app/ui/CalendarCard/calendarCard.module.css";
import Button from "@/app/ui/Buttons/Buttons";
import leftArrow from "@/public/left_arrow.svg";
import rightArrow from "@/public/right_arrow.svg";
import { useRouter } from "next/navigation";

export default function CalendarCard({ month, amount }) {
    const router = useRouter();

    const monthToRoute = {
        January: "/Expense/overview/Weekly/January",
        February: "/Expense/overview/Weekly/February",
        March: "/Expense/overview/Weekly/March",
        April: "/Expense/overview/Weekly/April",
        May: "/Expense/overview/Weekly/May",
        June: "/Expense/overview/Weekly/June",
        July: "/Expense/overview/Weekly/July",
        August: "/Expense/overview/Weekly/August",
        September: "/Expense/overview/Weekly/September",
        October: "/Expense/overview/Weekly/October",
        November: "/Expense/overview/Weekly/November",
        December: "/Expense/overview/Weekly/December",
    };

    const months = Object.keys(monthToRoute);
    const currentIndex = months.indexOf(month);

    const handlePrevMonth = () => {
        if (currentIndex > 0) {
            const prevMonth = months[currentIndex - 1];
            router.push(monthToRoute[prevMonth]);
        }
    };

    const handleNextMonth = () => {
        if (currentIndex < months.length - 1) {
            const nextMonth = months[currentIndex + 1];
            router.push(monthToRoute[nextMonth]);
        }
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
                        onClick={handlePrevMonth}
                    />
                </div>
                <span className={styles.month}>{month}</span>
                <div className={styles.arrowRight}>
                    <Button
                        imageSrc={rightArrow}
                        onClick={handleNextMonth}
                    />
                </div>
            </div>
            <div className={styles.spentLabel}>You've Earned:</div>
            <div className={styles.amount}>${amount}</div>
            <div className={styles.thisMonth}>This Month!</div>
        </div>
    );
}
