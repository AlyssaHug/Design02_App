import ToggleButton from "@/app/ui/Buttons/ToggleButton";
import styles from "./calendarCard.module.css";

export default function MonthlySummary() {
    return (
        <div className={styles.container}>
            <ToggleButton />
            <div className={styles.pill}>Transactions This Month</div>
            <div className={styles.monthRow}>
                <span className={styles.arrowLeft}></span>
                <span className={styles.month}>{month}</span>
                <span className={styles.arrowRight}></span>
            </div>
            <div className={styles.spentLabel}>You've Spent:</div>
            <div className={styles.amount}>{amount}</div>
            <div className={styles.thisMonth}>This Month!</div>
        </div>
    );
}
