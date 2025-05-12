"use client";
import Button from "@/app/ui/Buttons/Buttons";
import TransactionCard from "@/app/ui/TransactionCards/transactionCard";
import Nav from "@/app/ui/navbar/navbar";
import styles from "./overview.module.css";

export default function Page() {
    return (
        <>
            <div className={styles.transactionContainer}>
                <Button
                    type='expense'
                    value='Income'
                />
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.buttonIncome}>
                    <Button
                        size='caption'
                        value='income overview'
                        style='round'
                        color='light-blue'
                    />
                </div>
                <div className={styles.buttonHistory}>
                    <Button
                        size='caption'
                        value='view history'
                        style='round'
                        color='light-blue'
                    />
                </div>
                <div className={styles.buttonCalendar}>
                    <Button
                        size='caption'
                        value='calendar'
                        style='round'
                        color='light-blue'
                    />
                </div>
            </div>
            <Nav />
        </>
    );
}
