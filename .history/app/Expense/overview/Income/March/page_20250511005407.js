"use client";

import Nav from "@/app/ui/navbar/navbar";
import TransactionCard from "@/app/ui/TransactionCards/transactionCard";
import IncomeCard from "@/app/ui/IncomeCards/incomeCards";
import styles from "@/app/Expense/overview/Income/March/IncomeMarch.module.css";

export default function Page() {
    return (
        <>
            <div className={styles.header}></div>
            <IncomeCard
                month='March'
                amount='113.67'
            />
            ,
        </>
    );
}
