"use client";

import Nav from "@/app/ui/navbar/navbar";
import Button from "@/app/ui/Buttons/Buttons";
import TransactionCard from "@/app/ui/TransactionCards/transactionCard";
import CalendarCard from "@/app/ui/CalendarCard/calendarCard";
import styles from "./may.module.css";

export default function Page() {
    return (
        <div>
            <Button
                color='light'
                value='GO BACK'
                href='/'
            />
            <div className={styles.header}>
                <CalendarCard
                    month='May'
                    amount='258.72'
                />
            </div>
            <div className={styles.transactionContainer}>
                <div className={styles.transactionDates}>
                    <p>Yesterday</p>
                </div>
                <TransactionCard
                    time='3:26pm'
                    category='Misc...'
                    amount='9.00'
                    description='Photo strips'
                    merchant='PhotoCrumb'
                />
                <TransactionCard
                    time='1:34pm'
                    category='Misc...'
                    amount='16.86'
                    description='Makeup'
                    merchant='Omomo'
                />
                <div className={styles.transactionDates}>
                    <p> May 6th</p>
                </div>
                <TransactionCard
                    time='4:46pm'
                    category='Misc...'
                    amount='16.45'
                    description='Movie tickets'
                    merchant='Cinema'
                />
                <div className={styles.transactionDates}>
                    <p>May 5th</p>
                </div>
                <TransactionCard
                    time='12:23pm'
                    category='Dine...'
                    amount='7.23'
                    description='BBT'
                    merchant='CoCo'
                />
                <div className={styles.transactionDates}>
                    <p>May 3rd</p>
                </div>
                <TransactionCard
                    time='11:20pm'
                    category='Dine...'
                    amount='7.57'
                    description='Kids meal'
                    merchant='Popeyes'
                />
                <TransactionCard
                    time='10:33am'
                    category='Misc...'
                    amount='12.57'
                    description='Artboard'
                    merchant='Dollarama'
                />
                <TransactionCard
                    time='4:20pm'
                    category='Games'
                    amount='99.45'
                    description='In-game purchase'
                    merchant='Fortnite'
                />
            </div>
        </div>
    );
}
