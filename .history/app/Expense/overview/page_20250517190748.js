"use client";
import Button from "@/app/ui/Buttons/Buttons";
import TransactionCard from "@/app/ui/TransactionCards/transactionCard";
import Nav from "@/app/ui/navbar/navbar";
import styles from "./overview.module.css";
import PageHeader from "@/app/ui/page-headers/page-header";

export default function Page() {
    return (
        <>
            <PageHeader
                title='Overview'
                header='expense_overview_header'
            />
            <div className={styles.transactionContainer}>
                <div className={styles.transactionIncome}>
                    <Button
                        value='Income $98.36'
                        type='expense'
                        style='round'
                        href='overview/Income/May'
                    />
                </div>
                <div className={styles.transactionExpenses}>
                    <Button
                        value='Expenses $258.72'
                        type='expense'
                        style='round'
                        href='overview/Weekly/May'
                    />
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.buttonContainer}>
                    <div className={styles.buttonIncome}>
                        <Button
                            size='caption'
                            value='income overview'
                            style='round'
                            color='light-blue'
                            href='overview/Income/May'
                        />
                    </div>
                    <div className={styles.buttonHistory}>
                        <Button
                            size='caption'
                            value='view history'
                            style='round'
                            color='light-blue'
                            href='overview/Weekly/May'
                        />
                    </div>
                    <div className={styles.buttonCalendar}>
                        <Button
                            size='caption'
                            value='calendar'
                            style='round'
                            color='light-blue'
                            href='overview/MonthlyView'
                        />
                    </div>
                </div>
                <div className={styles.transactions}>
                    <div className={styles.transactionDate}>
                        <p>Today's History</p>
                    </div>

                    <TransactionCard
                        category='Dine...'
                        amount='48.52'
                        description='Kbbq at Chosun'
                        time='10:24pm'
                    />
                </div>
            </div>
            <Nav />
        </>
    );
}
