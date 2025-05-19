"use client";

import CalendarCard from "@/app/ui/CalendarCard/calendarCard";
import TransactionCard from "@/app/ui/TransactionCard/transactionCard";
import Navbar from "@/app/ui/navbar/navbar";
import styles from "./income.module.css";

export default function Page() {
    return (
        (
            <CalendarCard
                month='January'
                amount='134.57'
                state='Income'
                spentOrEarned='Earned'
            />
        ),
        (
            <TransactionCard
                category='Cash'
                amount='25.36'
                description='snacks and drinks'
            />
        )
    );
}
