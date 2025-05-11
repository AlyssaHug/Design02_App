import ToggleButton from "@/app/ui/Buttons/ToggleButton";
import styles from "@/app/ui/CalendarCard/calendarCard.module.css";

export default function CalendarCard({ month, amount }) {
    return (
        <div className={styles.container}>
            <div className={styles.headerRow}>
                <span className={styles.backArrow}></span>
                <ToggleButton />
            </div>
            <div className={styles.pill}>TransactionsThis Month</div>
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
