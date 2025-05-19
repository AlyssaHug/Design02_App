"use client";
import ToggleButton from "@/app/ui/Buttons/ToggleButton";
import styles from "@/app/ui/CalendarCard/calendarCard.module.css";
import Button from "@/app/ui/Buttons/Buttons";
import leftArrow from "@/public/left_arrow.svg";
import rightArrow from "@/public/right_arrow.svg";
import { useRouter } from "next/navigation";

export default function CalendarCard({ month, amount }) {
    const router = useRouter();

    const months = {
        January: "/Expense/overview/Weekly/January",
        February: "/Expense/overview/Weekly/February",
        March: "/Expense/overview/Weekly/March",
        April: "/Expense/overview/Weekly/April",
        May: "/Expense/overview/Weekly/May",
    };

    const monthOrder = ["January", "February", "March", "April", "May"];
    const currentIndex = monthOrder.indexOf(month);

    const prevPage = () => {
        if (currentIndex > 0) {
            const prevMonth = monthOrder[currentIndex - 1];
            router.push(months[prevMonth]);
        }
    };

    const nextPage = () => {
        if (currentIndex < monthOrder.length - 1) {
            const nextMonth = monthOrder[currentIndex + 1];
            router.push(months[nextMonth]);
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
                        onClick={prevPage}
                    />
                </div>
                <span className={styles.month}>{month}</span>
                <div className={styles.arrowRight}>
                    <Button
                        imageSrc={rightArrow}
                        onClick={nextPage}
                    />
                </div>
            </div>
            <div className={styles.spentLabel}>You've Earned:</div>
            <div className={styles.amount}>${amount}</div>
            <div className={styles.thisMonth}>This Month!</div>
        </div>
    );
}
