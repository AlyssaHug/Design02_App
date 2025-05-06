import styles from "./calendarCard.module.css";

export default function TransactionCard() {
    return (
        <div className={styles.container}>
            <span className={styles.time}>12:20pm</span>
            <span className={styles.card}>
                <span className={styles.category}>Dine...</span>
                <div className={styles.details}>
                    <span>
                        <b>Gyukaku</b> - $34.68
                    </span>
                    <br />
                    <span>Lunch with friends</span>
                </div>
            </span>
        </div>
    );
}
