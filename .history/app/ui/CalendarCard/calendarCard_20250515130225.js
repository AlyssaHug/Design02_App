"use client";
import ToggleButton from "@/app/ui/Buttons/ToggleButton";
import styles from "@/app/ui/CalendarCard/calendarCard.module.css";
import Button from "@/app/ui/Buttons/Buttons";
import leftArrow from "@/public/left_arrow.svg";
import rightArrow from "@/public/right_arrow.svg";
import { useRouter } from "next/navigation";

export default function CalendarCard({ month, amount, prevPage, nextPage }) {
    const router = useRouter();
    const months = {
        january: { name: "January", path: "/Expense/overview/Weekly/January" },
        february: {
            name: "February",
            path: "/Expense/overview/Weekly/February",
        },
        march: { name: "March", path: "/Expense/overview/Weekly/March" },
        april: { name: "April", path: "/Expense/overview/Weekly/April" },
        may: { name: "May", path: "/Expense/overview/Weekly/May" },
    };

    const handlePrevPage = () => {
        if (prevPage) {
            prevPage();
        }
    };

    const handleNextPage = () => {
        if (nextPage) {
            nextPage();
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
                        onClick={handlePrevPage}
                        type='nav'
                        alt='Previous month'
                    />
                </div>
                <span className={styles.month}>{month}</span>
                <div className={styles.arrowRight}>
                    <Button
                        imageSrc={rightArrow}
                        onClick={handleNextPage}
                        type='nav'
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
