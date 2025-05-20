"use client";
import Button from "@/app/ui/Buttons/Buttons";
import styles from "./feb.module.css";
import TransactionCard from "@/app/ui/TransactionCards/transactionCard";
import CalendarCard from "@/app/ui/Calendar/calendarCard";
import Nav from "@/app/ui/Nav/nav";
export default function Page() {
    return (
        <div>
            <Button
                color='light'
                value='GO BACK'
                href='/'
            />
            <Nav />
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
                <div className={styles.transactionDates}>
                    <p>February 26th</p>
                </div>
                <TransactionCard
                    time='12:20pm'
                    category='Misc...'
                    amount='5.67'
                    description='Pens + Paper'
                    merchant='Muji'
                />
                <div className={styles.transactionDates}>
                    <p>February 21st</p>
                </div>
                <TransactionCard
                    time='11:20pm'
                    category='Misc...'
                    amount='45.00'
                    description='Pool+VR ride'
                    merchant='E-spot'
                />
                <div className={styles.transactionDates}>
                    <p>February 14th</p>
                </div>
                <TransactionCard
                    time='3:12pm'
                    category='Dine...'
                    amount='12.79'
                    description='Croissant + Matcha Latte'
                    merchant='Cafe Algan'
                />
                <div className={styles.transactionDates}>
                    <p>February 12th</p>
                </div>
                <TransactionCard
                    time='3:24pm'
                    category='Misc...'
                    amount='2.00'
                    description='Bus fare'
                    merchant='Transit'
                />
                <div className={styles.transactionDates}>
                    <p>February 11th</p>
                </div>
                <TransactionCard
                    time='6:34pm'
                    category='Dine...'
                    amount='25.00'
                    description='3 drinks (venti)'
                    merchant='Starbucks'
                />
                <TransactionCard
                    time='10:34pm'
                    category='Dine...'
                    amount='3.87'
                    description='Ice Coffee'
                    merchant='Tim Hortons'
                />
                <div className={styles.transactionDates}>
                    <p>February 10th</p>
                </div>
                <TransactionCard
                    time='3:45pm'
                    category='Dine...'
                    amount='8.46'
                    description='Chicken tenders'
                    merchant='Costco'
                />
                <div className={styles.transactionDates}>
                    <p>February 6th</p>
                </div>
                <TransactionCard
                    time='5:43pm'
                    category='Health'
                    amount='75.00'
                    description='Vit D test'
                    merchant='LifeLabs'
                />
                <TransactionCard
                    time='4:20pm'
                    category='Dine...'
                    amount='33.87'
                    description='2 bowls of Ramen'
                    merchant='YahYah Ramen'
                />
            </div>
        </div>
    );
}
