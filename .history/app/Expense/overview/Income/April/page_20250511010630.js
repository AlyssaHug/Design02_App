"use client";

import Nav from "@/app/ui/navbar/navbar";
import TransactionCard from "@/app/ui/TransactionCards/transactionCard";
import IncomeCard from "@/app/ui/IncomeCards/incomeCards";
import styles from "@/app/Expense/overview/Income/April/IncomeApril.module.css";

export default function Page() {
    return (
        <>
            <div className={styles.header}>
                <IncomeCard
                    month='April'
                    amount='100.00'
                />
            </div>
            <div className={styles.transactionContainer}>
                <div className={styles.transactionDates}>
                    <p>April 2nd</p>
                </div>
                <TransactionCard
                    time='12:25pm'
                    category='Trans...'
                    amount='24.68'
                    description='paid back for Hotpot'
                />
                <TransactionCard
                    time='12:00amm'
                    category='Trans...'
                    amount='104.57'
                    description='Payday'
                />
            </div>
            <Nav />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    );
}
