"use client";

import Nav from "@/app/ui/navbar/navbar";
import TransactionCard from "@/app/ui/TransactionCards/transactionCard";
import IncomeCard from "@/app/ui/IncomeCards/incomeCards";
import styles from "@/app/Expense/overview/Income/March/IncomeMarch.module.css";

export default function Page() {
    return (
        <>
            <div className={styles.header}>
                <IncomeCard
                    month='March'
                    amount='113.67'
                />
            </div>
            <div className={styles.transactionContainer}>
                <TransactionCard
                    time='12:35pm'
                    category='Trans...'
                    amount='40.00'
                    description='FB marketplace'
                />
                <TransactionCard
                    time='1:20am'
                    category='Cash'
                    amount='12.57'
                    description='Paid back from Espot'
                />
                <TransactionCard
                    time='4:16pm'
                    category='Cash'
                    amount='10.00'
                    description='FB marketplace'
                />
                <TransactionCard
                    time='1:34pm'
                    category='Cash'
                    amount='9.87'
                    description='Paid back from HeyTea'
                />
                <TransactionCard
                    time='11:46pm'
                    category='Trans...'
                    amount='36.23'
                    description='Paid back from Hotpot'
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
