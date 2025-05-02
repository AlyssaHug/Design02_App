import styles from "./calendarCard.module.css";

const transations= [
    {
        time: "12:20pm",
        card: "Dine...",
        category: "Dine Out",
        details: {
            name: "Gyukaku",
            amount: "$34.68",
        },
    },
    {
        time: "12:20pm",
        card: "Dine...",
        category: "Dine Out",
        details: {
            name: "Gyukaku",
        ];
export default function CalendarCard() {
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
