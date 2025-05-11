"use client";

import Nav from "@/app/ui/navbar/navbar";
import TransactionCard from "@/app/ui/TransactionCards/transactionCard";
import IncomeCard from "@/app/ui/IncomeCards/incomeCards";
import styles from "@/app/Expense/overview/Income/January/IncomeJan.module.css";

export default function Page() {
    return (
        <>
            <div className={styles.header}>
                <IncomeCard
                    month='January'
                    amount='134.57'
                />
            </div>
            <div className={styles.transactionContainer}>
                <div className={styles.transactionDates}>
                    <p> January 24th</p>
                </div>
                <TransactionCard
                    time='12:20pm'
                    category='E-trans'
                    amount='35.68'
                    description='Paid back for food'
                />
                <div className={styles.transactionDates}>
                    <p> January 18th</p>
                </div>
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
                <div className={styles.transactionDates}>
                    <p> January 8th</p>
                </div>
                <TransactionCard
                    category='E-trans'
                    amount='40.00'
                    description='Haidilao Hotpot'
                    time='2:53pm'
                />
                <div className={styles.transactionDates}>
                    <p> January 6th</p>
                </div>
                <TransactionCard
                    category='Cash'
                    amount='25.36'
                    description='snacks and drinks'
                    time='1:34pm'
                />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Nav />
        </>
    );
}
