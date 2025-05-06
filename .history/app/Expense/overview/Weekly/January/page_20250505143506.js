import TransactionCard from "@/app/ui/TransactionCard/transactionCard";
import CalendarCard from "@/app/ui/CalendarCard/calendarCard";
export default function JanuaryOverview() {
    return (
        <>
            <CalendarCard
                month='January'
                amount='440.02'
            />
            {/*January*/}
            <TransactionCard
                time='11:47am'
                category='Dine...'
                amount='1.68'
                description='icecream'
                merchant='Mcdonalds'
            />
            <TransactionCard
                time='12:19pm'
                category='Groc...'
                amount='35.35'
                description='Pikachu Squishmallow'
                merchant='Costco'
            />
            <TransactionCard
                time='8:36pm'
                category='Online'
                amount='151.67'
                description=' NZXT H7 Elite Case'
                merchant='Canada Computers'
            />
            <TransactionCard
                time='2:34pm'
                category='Games'
                amount='85.76'
                description='Nintendo Switch game'
                merchant='GameStop'
            />
            <TransactionCard
                time='4:20pm'
                category='Misc...'
                amount='25.55'
                description='Acrylic Paint'
                merchant='Michaels'
            />
            <TransactionCard
                time='11:35am'
                category='Misc...'
                amount='88.63'
                description='Wireless keyboard'
                merchant='Staples'
            />
            <TransactionCard
                time='11:45am'
                category='Dine...'
                amount='11.35'
                description='Ice Coffe & Chilli'
                merchant='Tim Hortons'
            />
            <TransactionCard
                time='11:00am'
                category='Dine...'
                amount='4.79'
                description='Swedish Meatballs'
                merchant='Ikea'
            />
            <TransactionCard
                time='11:46am'
                category='Dine...'
                amount='15.78'
                description='Rotisserie Chicken'
                merchant='Costco'
            />
            <TransactionCard
                time='12:20pm'
                category='Dine...'
                amount='3.68'
                description='Ice Coffee'
                merchant='Tim Hortons'
            />
            <TransactionCard
                time='10:36am'
                category='Dine...'
                amount='3.68'
                description='Ice Coffee'
                merchant='Tim Hortons'
            />
            <TransactionCard
                time='12:56am'
                category='Dine...'
                amount='3.68'
                description='Ice Coffee'
                merchant='Tim Hortons'
            />
            <TransactionCard
                time='12:56am'
                category='Dine...'
                amount='8:42'
                description='Strawberry Matcha Latte'
                merchant='Cafe Algan'
            />
        </>
    );
}
