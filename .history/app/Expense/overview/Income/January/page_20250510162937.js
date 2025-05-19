"use client";

import Nav from "@/app/ui/navbar/navbar";
import TransactionCard from "@/app/ui/TransactionCards/transactionCard";
import CalendarCard from "@/app/ui/CalendarCard/calendarCard";
import styles from "./IncomeJan.modules.css";

export default function Page() {
    return (
        (
            <div className={styles.header}>
                <CalendarCard
                    month='January'
                    amount='134.57'
                    state='Income'
                    spentOrEarned='Earned'
                />
            </div>
        ),
        (
            <TransactionCard
                category='Cash'
                amount='25.36'
                description='snacks and drinks'
            />
        ),
        (<Nav />)
    );
}
