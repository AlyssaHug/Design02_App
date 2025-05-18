import styles from "@/app/ui/IncomeCards/incomeCards.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function IncomeCard({ month, amount, prevMonth, nextMonth }) {
    const router = useRouter();
    const [isDates, setIsDates] = useState(false); // Initialize as false for Transactions view

    const navigateToMonth = (month) => {
        router.replace(month);
    };

    const handleToggle = (isDatesView) => {
        setIsDates(isDatesView);
        if (isDatesView) {
            router.replace("/Expense/overview/MonthlyView");
        }
    };
    const backToOverview = () => {
        router.replace("/Expense/overview");
    };
    return (
        <div className={styles.box}>
            <div className={styles.headerRow}>
                <div className={styles.backButton}>
                    <Button
                        imageSrc='/left_arrow.svg'
                        onClick={backToOverview}
                    />
                </div>
            </div>
            <div className={styles.pill}>Income This Month</div>
            <div className={styles.monthRow}>
                <span className={styles.arrowLeft}></span>
                <span className={styles.month}>{month}</span>
                <span className={styles.arrowRight}></span>
            </div>
            <div className={styles.spentLabel}>You've Earned:</div>
            <div className={styles.amount}>${amount}</div>
            <div className={styles.thisMonth}>This Month!</div>
        </div>
    );
}
