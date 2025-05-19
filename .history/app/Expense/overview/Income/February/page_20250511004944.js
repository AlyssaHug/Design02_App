"use client";

import Nav from "@/app/ui/navbar/navbar";
import TransactionCard from "@/app/ui/TransactionCards/transactionCard";
import IncomeCard from "@/app/ui/IncomeCards/incomeCards";
import styles from "@/app/Expense/overview/Income/February/feb.module.css";

export default function Page() {
    return (
        <>
            <IncomeCard
                month='February'
                amount='0.00'
            />
            <p>No Income this month</p>
        </>
    );
}
