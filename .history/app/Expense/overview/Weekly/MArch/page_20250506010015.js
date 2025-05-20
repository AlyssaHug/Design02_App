"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import Calendar from "@/components/Calendar";
import TransactionCard from "@/app/ui/TransactionCards/transactionCard";

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
                    month='March'
                    amount='188.90'
                />
            </div>
            <div className={styles.transactionContainer}>
                <TransactionCard
                    time='12:54pm'
                    category='Dine...'
                    amount='3.35'
                    description='BBT'
                    merchant='Ngon'
                />
                <TransactionCard
                    time='12:34pm'
                    category='Dine...'
                    amount='3.35'
                    description='Cake'
                    merchant='T&T Supermarket'
                />
                <TransactionCard
                    time='12:26pm'
                    category='Groc...'
                    amount='2.68'
                    description='B-day hat'
                    merchant='Dollarama'
                />
                <TransactionCard
                    time='10:33am'
                    category='Dine...'
                    amount='7.57'
                    description='McDouble Meal'
                    merchant='McDonalds'
                />
                <TransactionCard
                    time='3:36pm'
                    category='Dine...'
                    amount='1.67'
                    description='Ice Cream'
                    merchant='Mcdonalds'
                />
                <TransactionCard
                    time='11:46pm'
                    category='Dine...'
                    amount='7.85'
                    description='Chilli'
                    merchant='Tim Hortons'
                />
                <TransactionCard
                    time='3:48pm'
                    category='Dine...'
                    amount='3.68'
                    description='Ice Coffee'
                    merchant='Tim Hortons'
                />
                <TransactionCard
                    time='11:00am'
                    category='Misc...'
                    amount='6.87'
                    description='Paint + Brushes'
                    merchant='Dollarama'
                />
                <TransactionCard
                    time='12:38am'
                    category='Online...'
                    amount='23.87'
                    description='Spotify Premium'
                    merchant='Spotify'
                />
                <TransactionCard
                    time='5:37pm'
                    category='Misc...'
                    amount='23.87'
                    description='Shipping Fee'
                    merchant='Canada Post'
                />
                <TransactionCard
                    time='12:45pm'
                    category='Misc...'
                    amount='3.87'
                    description='bubble mail'
                    merchant='Shoppers Drug Mart'
                />
                <TransactionCard
                    time='9:35pm'
                    category='Dine...'
                    amount='8.87'
                    description='Matcha Bobo'
                    merchant='HeyTea'
                />
                <TransactionCard
                    time='8:46pm'
                    category='Misc...'
                    amount='8.87'
                    description='Glue stick'
                    merchant='Dollarama'
                />
                <TransactionCard
                    time='7:59pm'
                    category='Misc...'
                    amount='2.00'
                    description='Parking fee'
                    merchant='City of Vancouver'
                />
                <TransactionCard
                    time='10:34pm'
                    category='Dine...'
                    amount='7.87'
                    description='McDouble Meal'
                    merchant='McDonalds'
                />
                <TransactionCard
                    time='4:05pm'
                    category='Misc...'
                    amount='17.00'
                    description='Photo strips'
                    merchant='PhotoCrumb'
                />
                <TransactionCard
                    time='1:20pm'
                    category='Dine...'
                    amount='18.87'
                    description='Pho'
                    merchant='HA Cafe Vietnam'
                />
                <TransactionCard
                    time='2:25am'
                    category='Online...'
                    amount='12.87'
                    description='Pink Ribbons'
                    merchant='AliExpress'
                />
                <TransactionCard
                    time='12:35pm'
                    category='Dine...'
                    amount='3.87'
                    description='Ice Coffee'
                    merchant='Tim Hortons'
                />
                <TransactionCard
                    time='4:34pm'
                    category='Dine...'
                    amount='7.87'
                    description='Hojicha milk tea'
                    merchant='Palgona'
                />
                <TransactionCard
                    time='2:34pm'
                    category='Dine...'
                    amount='3.87'
                    description='Ice Coffee'
                    merchant='Tim Hortons'
                />
            </div>
        </div>
    );
}
