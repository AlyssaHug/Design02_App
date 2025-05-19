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
            <div className={styles.transactionContainer}>
                <TransactionCard
                    time='12:20pm'
                    category='E-trans'
                    amount='35.68'
                    description='Paid back for food'
                />
                <TransactionCard
                    category='Cash'
                    amount='25.00'
                    description='FB marketplace'
                    time='11:20pm'
                />
                <TransactionCard
                    category='Cash'
                    amount='8.53'
                    description='CoCos'
                    time='10:33am'
                />

                <TransactionCard
                    category='E-trans'
                    amount='40.00'
                    description='Haidilao Hotpot'
                    time='2:53pm'
                />
                <TransactionCard
                    category='Cash'
                    amount='25.36'
                    description='snacks and drinks'
                    time='1:34pm'
                />
            </div>
        ),
        (<Nav />)
    );
}
