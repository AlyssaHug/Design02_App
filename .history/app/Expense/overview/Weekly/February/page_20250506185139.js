"use client";
import styles from "./february.module.css";
import TransactionCard from "@/app/ui/TransactionCards/transactionCard";
import CalendarCard from "@/app/ui/Calendar/calendarCard";

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
                    month='February'
                    amount='219.54'
                />
            </div>
            <div className={styles.transactionContainer}>
                <div className={styles.transactionDates}>
                    <p>February 28th</p>
                </div>
                <TransactionCard
                    time='4:52pm'
                    category='Dine...'
                    amount='7.88'
                    description='Two ladies'
                    merchant='Coco'
                />
                <TransactionCard
                    time='12:20pm'
                    category='Misc...'
                    amount='5.67'
                    description='Pens + Paper'
                    merchant='Muji'
                />
                <TransactionCard
                    time='11:20pm'
                    category='Misc...'
                    amount='45.00'
                    description='Pool+VR ride'
                    merchant='E-spot'
                />{" "}
                <TransactionCard
                    time='3:12pm'
                    category='Dine...'
                    amount='12.79'
                    description='Croissant + Matcha Latte'
                    merchant='Cafe Algan'
                />
            </div>
        </div>
    );
}
