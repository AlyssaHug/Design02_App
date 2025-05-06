"use client";

import Dropdown from "@/app/ui/dropdown/dropdown";
import ToggleButton from "@/app/ui/Buttons/ToggleButton";
import GoalProgress from "@/app/ui/GoalCards/GoalCards";
import { Goals } from "@/app/ui/GoalCards/GoalCards";
import { GoalRecs } from "@/app/ui/GoalCards/GoalCards";
import styles from "@/app/ui/GoalCards/GoalCards.module.css";
import Button from "@/app/ui/Buttons/Buttons";
import { GoalCow } from "@/app/ui/GoalCards/GoalCards";
import TransactionCard from "@/app/ui/TransactionCards/transactionCard";
import MonthlySummary from "@/app/ui/CalendarCard/calendarCard";
export default function Page() {
    const categoryOptions = [
        { value: "groceries", label: "Groceries" },
        { value: "dineout", label: "Dine Out" },
        { value: "clothing", label: "Clothing" },
        { value: "games", label: "Games" },
        { value: "online_shopping", label: "Online Shopping" },
        { value: "add_category", label: "Add category +" },
    ];

    const monthOptions = [
        { value: "1", label: "January" },
        { value: "2", label: "February" },
        { value: "3", label: "March" },
        { value: "4", label: "April" },
        { value: "5", label: "May" },
        { value: "6", label: "June" },
        { value: "7", label: "July" },
        { value: "8", label: "August" },
        { value: "9", label: "September" },
        { value: "10", label: "October" },
        { value: "11", label: "November" },
        { value: "12", label: "December" },
    ];

    const dateOptions = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
        { value: "6", label: "6" },
        { value: "7", label: "7" },
        { value: "8", label: "8" },
        { value: "9", label: "9" },
        { value: "10", label: "10" },
        { value: "11", label: "11" },
        { value: "12", label: "12" },
        { value: "13", label: "13" },
        { value: "14", label: "14" },
        { value: "15", label: "15" },
        { value: "16", label: "16" },
        { value: "17", label: "17" },
        { value: "18", label: "18" },
        { value: "19", label: "19" },
        { value: "20", label: "20" },
        { value: "21", label: "21" },
        { value: "22", label: "22" },
        { value: "23", label: "23" },
        { value: "24", label: "24" },
        { value: "25", label: "25" },
        { value: "26", label: "26" },
        { value: "27", label: "27" },
        { value: "28", label: "28" },
        { value: "29", label: "29" },
        { value: "30", label: "30" },
        { value: "31", label: "31" },
    ];

    const yearOptions = [
        { value: "2025", label: "2025" },
        { value: "2026", label: "2026" },
        { value: "2027", label: "2027" },
        { value: "2028", label: "2028" },
        { value: "2029", label: "2029" },
        { value: "2030", label: "2030" },
        { value: "2031", label: "2031" },
        { value: "2032", label: "2032" },
        { value: "2033", label: "2033" },
        { value: "2034", label: "2034" },
        { value: "2035", label: "2035" },
    ];

    const depositFrequencyOptions = [
        { value: "daily", label: "Daily" },
        { value: "weekly", label: "Weekly" },
        { value: "bi-weekly", label: "Bi-weekly" },
        { value: "monthly", label: "Monthly" },
    ];

    const goalTypeOptions = [
        { value: "vacation", label: "Vacation" },
        { value: "concert", label: "Concert" },
        { value: "Digital", label: "Digital" },
        { value: "Big_Purchase", label: "Big Purchase" },
        { value: "Saving", label: "Saving" },
    ];

    const interactionOptions = [
        { value: "e-transfer", label: "E-Transfer" },
        { value: "cash", label: "Cash" },
        { value: "cheque", label: "Cheque" },
        { value: "paypal", label: "Paypal" },
        { value: "other", label: "Other" },
    ];

    const handleCategorySelect = (option) => {
        if (option.value === "add_category") {
            console.log("Add category clicked");
        }
    };

    const handleMonthSelect = (option) => {
        // Handle month selection
    };

    const handleDateSelect = (option) => {
        // Handle date selection
    };

    const handleYearSelect = (option) => {
        // Handle year selection
    };

    const handleDepositFrequencySelect = (option) => {
        // Handle deposit frequency selection
    };

    const handleGoalTypeSelect = (option) => {
        // Handle goal type selection
    };

    const handleInteractionSelect = (option) => {
        if (option.value === "other") {
            console.log("Other interaction selected");
        }
    };

    return (
        <div>
            <ToggleButton />
            <GoalProgress
                value='Goal Progress'
                type='progress'
            />
            <div className={styles.subheaderContainer}>
                <h3 className={styles.subheader}>Goals</h3>
                <Button
                    className={styles.view}
                    color='dark'
                    value='Create Goal'
                />
            </div>
            <div className={styles.goalsContent}>
                <Goals
                    type='goals'
                    value='Reduce spending by $60!'
                    imageSrc='/right_arrow.svg'
                />
                <Goals
                    type='goals'
                    value='Add $50 to tuition fund!'
                    imageSrc='/right_arrow.svg'
                />
            </div>
            <div className={styles.subheaderContainer}>
                <h3 className={styles.subheader}>Recommendations</h3>
                <Button
                    className={styles.view}
                    color='dark'
                    value='View More'
                />
            </div>
            <div className={styles.recsContent}>
                <GoalRecs value='Spend $50 less on games!' />
                <GoalRecs value='Spend $50 less on games!' />
            </div>
            <div className={styles.subheaderContent}>
                <h3 className={styles.subheader}>Your cow friend!</h3>
            </div>
            <GoalCow
                type='goalCow'
                value='Check on MooMoo!'
            />
            <div>
                <Dropdown
                    options={categoryOptions}
                    onSelect={handleCategorySelect}
                    placeholder='Select your category'
                />
                <Dropdown
                    options={monthOptions}
                    onSelect={handleMonthSelect}
                    placeholder='Select month'
                />
                <Dropdown
                    options={dateOptions}
                    onSelect={handleDateSelect}
                    placeholder='Select date'
                />
                <Dropdown
                    options={yearOptions}
                    onSelect={handleYearSelect}
                    placeholder='Select year'
                />
                <Dropdown
                    options={depositFrequencyOptions}
                    onSelect={handleDepositFrequencySelect}
                    placeholder='Select deposit frequency'
                />
                <Dropdown
                    options={goalTypeOptions}
                    onSelect={handleGoalTypeSelect}
                    placeholder='Select goal type'
                />
                <Dropdown
                    options={interactionOptions}
                    onSelect={handleInteractionSelect}
                    placeholder='Select interaction'
                />
            </div>
            <div>
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
                {/*February*/}
                <TransactionCard
                    time='4:20pm'
                    category='Dine...'
                    amount='33.87'
                    description='2 bowls of Ramen'
                    merchant='YahYah Ramen'
                />
                <TransactionCard
                    time='5:43pm'
                    category='Health'
                    amount='75.00'
                    description='Vit D test'
                    merchant='LifeLabs'
                />
                <TransactionCard
                    time='5:43pm'
                    category='Health'
                    amount='75.00'
                    description='Vit D test'
                    merchant='LifeLabs'
                />
                <TransactionCard
                    time='3:45pm'
                    category='Dine...'
                    amount='8.46'
                    description='Chicken tenders'
                    merchant='Costco'
                />
                <TransactionCard
                    time='10:34pm'
                    category='Dine...'
                    amount='3.87'
                    description='Ice Coffee'
                    merchant='Tim Hortons'
                />
                <TransactionCard
                    time='6:34pm'
                    category='Dine...'
                    amount='25.00'
                    description='3 drinks (venti)'
                    merchant='Starbucks'
                />
                <TransactionCard
                    time='3:24pm'
                    category='Misc...'
                    amount='2.00'
                    description='Bus fare'
                    merchant='Transit'
                />
                <TransactionCard
                    time='3:12pm'
                    category='Dine...'
                    amount='12.79'
                    description='Croissant + Matcha Latte'
                    merchant='Cafe Algan'
                />
                <TransactionCard
                    time='11:20pm'
                    category='Misc...'
                    amount='45.00'
                    description='Pool+VR ride'
                    merchant='E-spot'
                />
                <TransactionCard
                    time='12:20pm'
                    category='Misc...'
                    amount='5.67'
                    description='Pens + Paper'
                    merchant='Muji'
                />
                <TransactionCard
                    time='4:52pm'
                    category='Dine...'
                    amount='7.88'
                    description='Two ladies'
                    merchant='Coco'
                />
                {/*March*/}
                <TransactionCard
                    time='2:34pm'
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
                    time='12:35pm'
                    category='Dine...'
                    amount='3.87'
                    description='Ice Coffee'
                    merchant='Tim Hortons'
                />
                <TransactionCard
                    time='2:25am'
                    category='Online...'
                    amount='12.87'
                    description='Pink Ribbons'
                    merchant='AliExpress'
                />
                <TransactionCard
                    time='1:20pm'
                    category='Dine...'
                    amount='18.87'
                    description='Pho'
                    merchant='HA Cafe Vietnam'
                />
                <TransactionCard
                    time='4:05pm'
                    category='Misc...'
                    amount='17.00'
                    description='Photo strips'
                    merchant='PhotoCrumb'
                />
                <TransactionCard
                    time='10:34pm'
                    category='Dine...'
                    amount='7.87'
                    description='McDouble Meal'
                    merchant='McDonalds'
                />
                <TransactionCard
                    time='7:59pm'
                    category='Misc...'
                    amount='2.00'
                    description='Parking fee'
                    merchant='City of Vancouver'
                />
                <TransactionCard
                    time='8:46pm'
                    category='Misc...'
                    amount='8.87'
                    description='Glue stick'
                    merchant='Dollarama'
                />
                <TransactionCard
                    time='9:35pm'
                    category='Dine...'
                    amount='8.87'
                    description='Matcha Bobo'
                    merchant='HeyTea'
                />
                <TransactionCard
                    time='12:45pm'
                    category='Misc...'
                    amount='3.87'
                    description='bubble mail'
                    merchant='Shoppers Drug Mart'
                />
                <TransactionCard
                    time='5:37pm'
                    category='Misc...'
                    amount='23.87'
                    description='Shipping Fee'
                    merchant='Canada Post'
                />
                <TransactionCard
                    time='12:38am'
                    category='Online...'
                    amount='23.87'
                    description='Spotify Premium'
                    merchant='Spotify'
                />
                <TransactionCard
                    time='11:00am'
                    category='Misc...'
                    amount='6.87'
                    description='Paint + Brushes'
                    merchant='Dollarama'
                />
                <TransactionCard
                    time='3:48pm'
                    category='Dine...'
                    amount='3.68'
                    description='Ice Coffee'
                    merchant='Tim Hortons'
                />
                <TransactionCard
                    time='11:46pm'
                    category='Dine...'
                    amount='7.85'
                    description='Chilli'
                    merchant='Tim Hortons'
                />
                <TransactionCard
                    time='3:36pm'
                    category='Dine...'
                    amount='1.67'
                    description='Ice Cream'
                    merchant='Mcdonalds'
                />
                <TransactionCard
                    time='10:33am'
                    category='Dine...'
                    amount='7.57'
                    description='McDouble Meal'
                    merchant='McDonalds'
                />
                <TransactionCard
                    time='12:26pm'
                    category='Groc...'
                    amount='2.68'
                    description='B-day hat'
                    merchant='Dollarama'
                />
                <TransactionCard
                    time='12:34pm'
                    category='Dine...'
                    amount='3.35'
                    description='Cake'
                    merchant='T&T Supermarket'
                />
                <TransactionCard
                    time='12:54pm'
                    category='Dine...'
                    amount='3.35'
                    description='BBT'
                    merchant='Ngon'
                />
                {/*April*/}
                <TransactionCard
                    time='1:34pm'
                    category='Games'
                    amount='99.45'
                    description='In-game purchase'
                    merchant='Honkai Star Rail'
                />
                <TransactionCard
                    time='11:00am'
                    category='Cloth...'
                    amount='125.54'
                    description='White AF1'
                    merchant='Nike'
                />
                <TransactionCard
                    time='11:45am'
                    category='Dine...'
                    amount='16.23'
                    description='2 drinks'
                    merchant='HeyTea'
                />
                <TransactionCard
                    time='1:34am'
                    category='Dine...'
                    amount='12.86'
                    description='Taco combo'
                    merchant='Taco Luis'
                />
                <TransactionCard
                    time='4:20pm'
                    category='Groc...'
                    amount='4.54'
                    description='Whiteboard markers'
                    merchant='Walmart'
                />
                <TransactionCard
                    time='10:33am'
                    category='Dine...'
                    amount='12.57'
                    description='Nugget meal'
                    merchant='McDonalds'
                />
                <TransactionCard
                    time='11:20pm'
                    category='Games'
                    amount='90.00'
                    description='Skin bundle'
                    merchant='Valorant'
                />
                <TransactionCard
                    time='6:32pm'
                    category='Misc...'
                    amount='15.35'
                    description='Chiikawa figures'
                    merchant='Token'
                />
                <TransactionCard
                    time='2:25am'
                    category='Games'
                    amount='13.56'
                    description='REPO'
                    merchant='Steam'
                />
                <TransactionCard
                    time='5:34pm'
                    category='Games'
                    amount='130.64'
                    description='In-game purchase'
                    merchant='Fortnite'
                />
                <TransactionCard
                    time='11:46am'
                    category='Dine...'
                    amount='9.53'
                    description='Matcha Supreme'
                    merchant='HeyTea'
                />
                <TransactionCard
                    time='1:34pm'
                    category='Dine...'
                    amount='12.86'
                    description='BBT'
                    merchant='Uber Eats'
                />
                <TransactionCard
                    time='4:20pm'
                    category='Groc...'
                    amount='4.56'
                    description='Snacks'
                    merchant='T&T Supermarket'
                />
                <TransactionCard
                    time='5:33am'
                    category='Dine...'
                    amount='12.57'
                    description='Nugget meal'
                    merchant='McDonalds'
                />
                <TransactionCard
                    time='11:20pm'
                    category='Cloth...'
                    amount='190.23'
                    description='Dress'
                    merchant='Maie'
                />
                <TransactionCard
                    time='1:47pm'
                    category='Dine...'
                    amount='32.69'
                    description='Lunch with friends'
                    merchant='Earls'
                />
                <TransactionCard
                    time='5:23pm'
                    category='Dine...'
                    amount='9.68'
                    description='Mcdouble meal'
                    merchant='McDonalds'
                />
                {/*May*/}
                <TransactionCard
                    time='4:20pm'
                    category='Games'
                    amount='99.45'
                    description='In-game purchase'
                    merchant='Fortnite'
                />
                <TransactionCard
                    time='10:33am'
                    category='Misc...'
                    amount='12.57'
                    description='Artboard'
                    merchant='Dollarama'
                />
                <TransactionCard
                    time='11:20pm'
                    category='Dine...'
                    amount='7.57'
                    description='Kids meal'
                    merchant='Popeyes'
                />
                <TransactionCard
                    time='12:23pm'
                    category='Dine...'
                    amount='7.23'
                    description='BBT'
                    merchant='CoCo'
                />
                <TransactionCard
                    time='4:46pm'
                    category='Misc...'
                    amount='16.45'
                    description='Movie tickets'
                    merchant='Cinema'
                />
                <TransactionCard
                    time='1:34pm'
                    category='Misc...'
                    amount='16.86'
                    description='Makeup'
                    merchant='Omomo'
                />
                <TransactionCard
                    time='3:26pm'
                    category='Misc...'
                    amount='9.00'
                    description='Photo strips'
                    merchant='PhotoCrumb'
                />
            </div>
            <div>
                <CalendarCard
                    month='January'
                    amount='440.02'
                />
                <MonthlySummary
                    month='February'
                    amount='219.54'
                />
                <MonthlySummary
                    month='March'
                    amount='188.90'
                />
                <MonthlySummary
                    month='April'
                    amount='258.72 '
                />
                <MonthlySummary
                    month='May'
                    amount='258.72'
                />
            </div>
        </div>
    );
}
