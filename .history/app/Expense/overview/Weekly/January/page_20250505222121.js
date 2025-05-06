"use client";
import TransactionCard from "@/app/ui/TransactionCards/transactionCard";
import CalendarCard from "@/app/ui/CalendarCard/calendarCard";
import Button from "@/app/ui/Buttons/Buttons";
import styles from "./jan.module.css";
import Nav from "@/app/ui/navbar/navbar";
export default function Page() {
    return (
        <div>
            <div className={styles.header}>
                <Button
                    color='light'
                    value='GO BACK'
                    href='/'
                />
                <CalendarCard
                    month='January'
                    amount='440.02'
                />
            </div>
            <div className={styles.transactionContainer}>
                <div className={styles.tranactionDates}>
                    <p>January 29th</p>
                </div>
                <TransactionCard
                    time='12:56am'
                    category='Dine...'
                    amount='8:42'
                    description='Strawberry Matcha Latte'
                    merchant='Cafe Algan'
                />
                <div className={styles.transactionDates}>
                    <p>January 28th</p>
                </div>
                <TransactionCard
                    time='12:56am'
                    category='Dine...'
                    amount='3.68'
                    description='Ice Coffee'
                    merchant='Tim Hortons'
                />
                <div className={styles.transactionDates}>
                    <p>January 25th</p>
                </div>
                <TransactionCard
                    time='10:36am'
                    category='Dine...'
                    amount='3.68'
                    description='Ice Coffee'
                    merchant='Tim Hortons'
                />
                <div className={styles.transactionDates}>
                    <p>January 24th</p>
                </div>
                <TransactionCard
                    time='12:20pm'
                    category='Dine...'
                    amount='3.68'
                    description='Ice Coffee'
                    merchant='Tim Hortons'
                />
                <div className={styles.transactionDates}>
                    <p>January 22nd</p>
                </div>
                <TransactionCard
                    time='11:46am'
                    category='Dine...'
                    amount='15.78'
                    description='Rotisserie Chicken'
                    merchant='Costco'
                />
                <div className={styles.transactionDates}>
                    <p>January 19th</p>
                </div>
                <TransactionCard
                    time='11:00am'
                    category='Dine...'
                    amount='4.79'
                    description='Swedish Meatballs'
                    merchant='Ikea'
                />
                <div className={styles.transactionDates}>
                    <p>January 13th</p>
                </div>
                <TransactionCard
                    time='11:45am'
                    category='Dine...'
                    amount='11.35'
                    description='Ice Coffe & Chilli'
                    merchant='Tim Hortons'
                />
                <div className={styles.transactionDates}>
                    <p>January 9th</p>
                </div>
                <TransactionCard
                    time='11:35am'
                    category='Misc...'
                    amount='88.63'
                    description='Wireless keyboard'
                    merchant='Staples'
                />
                <div className={styles.transactionDates}>
                    <p>January 8th</p>
                </div>
                <TransactionCard
                    time='2:34pm'
                    category='Games'
                    amount='85.76'
                    description='Nintendo Switch game'
                    merchant='GameStop'
                />
                <TransactionCard
                    time='8:36pm'
                    category='Online'
                    amount='151.67'
                    description=' NZXT H7 Elite Case'
                    merchant='Canada Computers'
                />
                <div className={styles.transactionDates}>
                    <p>January 6th</p>
                </div>
                <TransactionCard
                    time='12:19pm'
                    category='Groc...'
                    amount='35.35'
                    description='Pikachu Squishmallow'
                    merchant='Costco'
                />
                <div className={styles.transactionDates}>
                    <p>January 5th</p>
                </div>
                <TransactionCard
                    time='11:47am'
                    category='Dine...'
                    amount='1.68'
                    description='icecream'
                    merchant='Mcdonalds'
                />
            </div>
            <div className={styles.nav}>
                <Nav />
            </div>
        </div>
    );
}
