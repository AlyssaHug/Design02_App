"use client";

import Nav from "@/app/ui/navbar/navbar";
import Button from "@/app/ui/Buttons/Buttons";
import TransactionCard from "@/app/ui/TransactionCards/transactionCard";
import CalendarCard from "@/app/ui/CalendarCard/calendarCard";
import styles from "./may.module.css";

export default function Page() {
    return (
        <div>
            <Button
                color='light'
                value='GO BACK'
                href='/'
            />
            <div className={styles.header}>
                <CalendarCard
                    month='May'
                    amount='258.72'
                />
            </div>
            <div className={styles.transactionContainer}></div>
        </div>
    );
}
