"use client";

import Nav from "@/app/ui/navbar/navbar";
import TransactionCard from "@/app/ui/TransactionCards/transactionCard";
import IncomeCard from "@/app/ui/IncomeCards/incomeCards";
import styles from "@/app/Expense/overview/Income/April/IncomeApril.module.css";

const weekdays = ["S", "M", "T", "W", "Th", "F", "S"];

export default function Page() {
    return (
        <>
            <div className={styles.header}>
                <IncomeCard
                    month='April'
                    amount='362.50'
                />
            </div>
            <div className={styles.transactionContainer}>
                <div className={styles.transactionDates}>
                    <p>April 24th</p>
                </div>
                <TransactionCard
                    time='12:00am'
                    category='Trans...'
                    amount='233.25'
                    description='Payday'
                />
                <div className={styles.transactionDates}>
                    <p>April 12th</p>
                </div>
                <TransactionCard
                    time='12:25pm'
                    category='Trans...'
                    amount='24.68'
                    description='paid back for Hotpot'
                />
                <div className={styles.transactionDates}>
                    <p>April 10th</p>
                </div>
                <TransactionCard
                    time='12:00am'
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
