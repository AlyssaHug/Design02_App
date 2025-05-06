import styles from "./calendarCard.module.css";

export default function CalendarCard({
    time,
    category,
    merchant,
    amount,
    description,
}) {
    return (
        <div>
            <div className={styles.container}>
                <span className={styles.time}>{time}</span>
                <span className={styles.card}>
                    <span className={styles.category}>{category}</span>
                    <div className={styles.details}>
                        <span>
                            <b>{merchant}</b> - ${amount}
                        </span>
                        <span>{description}</span>
                    </div>
                </span>
            </div>
        </div>
    );
}
