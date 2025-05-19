import styles from "@/app/ui/IncomeCards/incomeCards.module.css";

export default function IncomeCard({ month, amount }) {
    return (
        <div className={styles.box}>
            <div className={styles.headerRow}>
                <span className={styles.backArrow}></span>
            </div>
            <div className={styles.pill}>Income This Month</div>
            <div className={styles.monthRow}>
                <span className={styles.arrowLeft}></span>
                <span className={styles.month}>{month}</span>
                <span className={styles.arrowRight}></span>
            </div>
            <div className={styles.spentLabel}>You've Earned:</div>
            <div className={styles.amount}>{"+$" + amount}</div>
            <div className={styles.thisMonth}>This Month!</div>
        </div>
    );
}
