"use client";

import Nav from "@/app/ui/navbar/navbar";
import Button from "@/app/ui/Buttons/Buttons";
import TransactionCard from "@/app/ui/TransactionCards/transactionCard";
import CalendarCard from "@/app/ui/CalendarCard/calendarCard";

export default function Page() {
    return (
        <div>
            <div className={styles.header}>
                <CalendarCard
                    month='April'
                    amount='258.72'
                />
            </div>
            <div className={styles.transactionContainer}>
                <div className={styles.transactionDates}>
                    <p>April 29th</p>
                </div>
                <TransactionCard
                    time='5:23pm'
                    category='Dine...'
                    amount='9.68'
                    description='Mcdouble meal'
                    merchant='McDonalds'
                />
                <div className={styles.transactionDates}>
                    <p>April 27th</p>
                </div>
                <TransactionCard
                    time='1:47pm'
                    category='Dine...'
                    amount='32.69'
                    description='Lunch with friends'
                    merchant='Earls'
                />
                <div className={styles.transactionDates}>
                    <p>April 25th</p>
                </div>
                <TransactionCard
                    time='11:20pm'
                    category='Cloth...'
                    amount='190.23'
                    description='Dress'
                    merchant='Maie'
                />
                <TransactionCard
                    time='5:33am'
                    category='Dine...'
                    amount='12.57'
                    description='Nugget meal'
                    merchant='McDonalds'
                />
                <div className={styles.transactionDates}>
                    <p>April 21st</p>
                </div>
                <TransactionCard
                    time='4:20pm'
                    category='Groc...'
                    amount='4.56'
                    description='Snacks'
                    merchant='T&T Supermarket'
                />
                <TransactionCard
                    time='1:34pm'
                    category='Dine...'
                    amount='12.86'
                    description='BBT'
                    merchant='Uber Eats'
                />
                <TransactionCard
                    time='11:46am'
                    category='Dine...'
                    amount='9.53'
                    description='Matcha Supreme'
                    merchant='HeyTea'
                />
                <TransactionCard
                    time='5:34pm'
                    category='Games'
                    amount='130.64'
                    description='In-game purchase'
                    merchant='Fortnite'
                />
                <div className={styles.transactionDates}>
                    <p>April 20th</p>
                </div>
                <TransactionCard
                    time='2:25am'
                    category='Games'
                    amount='13.56'
                    description='REPO'
                    merchant='Steam'
                />
                <div className={styles.transactionDates}>
                    <p>April 18th</p>
                </div>
                <TransactionCard
                    time='6:32pm'
                    category='Misc...'
                    amount='15.35'
                    description='Chiikawa figures'
                    merchant='Token'
                />
                <div className={styles.transactionDates}>
                    <p>April 11th</p>
                </div>
                <TransactionCard
                    time='11:20pm'
                    category='Games'
                    amount='90.00'
                    description='Skin bundle'
                    merchant='Valorant'
                />
                <TransactionCard
                    time='10:33am'
                    category='Dine...'
                    amount='12.57'
                    description='Nugget meal'
                    merchant='McDonalds'
                />
                <div className={styles.transactionDates}>
                    <p>April 8th</p>
                </div>
                <TransactionCard
                    time='4:20pm'
                    category='Groc...'
                    amount='4.54'
                    description='Whiteboard markers'
                    merchant='Walmart'
                />
                <TransactionCard
                    time='1:34am'
                    category='Dine...'
                    amount='12.86'
                    description='Taco combo'
                    merchant='Taco Luis'
                />
                <TransactionCard
                    time='11:45am'
                    category='Dine...'
                    amount='16.23'
                    description='2 drinks'
                    merchant='HeyTea'
                />
                <TransactionCard
                    time='11:00am'
                    category='Cloth...'
                    amount='125.54'
                    description='White AF1'
                    merchant='Nike'
                />
                <div className={styles.transactionDates}>
                    <p>April 1st</p>
                </div>
                <TransactionCard
                    time='1:34pm'
                    category='Games'
                    amount='99.45'
                    description='In-game purchase'
                    merchant='Honkai Star Rail'
                />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
            <Nav />
        </div>
    );
}
