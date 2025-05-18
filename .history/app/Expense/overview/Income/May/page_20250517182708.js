"use client";

import Nav from "@/app/ui/navbar/navbar";
import TransactionCard from "@/app/ui/TransactionCards/transactionCard";
import IncomeCard from "@/app/ui/IncomeCards/incomeCards";
import styles from "@/app/Expense/overview/Income/May/IncomeMay.module.css";

export default function Page() {
    return (
        <>
            <div className={styles.header}>
                <IncomeCard
                    month='May'
                    amount='98.36'
                    prevMonth='April'
                />
            </div>
            <div className={styles.transactionContainer}>
                <div className={styles.transactionDates}>
                    <p>May 8th</p>
                </div>
                <TransactionCard
                    time='12:00am'
                    category='Trans...'
                    amount='98.36'
                    description='Payday'
                />
                <Nav />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    );
}
