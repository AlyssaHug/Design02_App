"use client";

import Coins from "./ui/coins/coins";
import Dropdown from "@/app/ui/dropdown/dropdown";
import ToggleButton from "@/app/ui/Buttons/ToggleButton";
import GoalProgress from "@/app/ui/GoalCards/GoalCards";
import { Goals } from "@/app/ui/GoalCards/GoalCards";
import { GoalRecs } from "@/app/ui/GoalCards/GoalCards";
import styles from "@/app/ui/GoalCards/GoalCards.module.css";
import Button from "@/app/ui/Buttons/Buttons";
import { GoalCow } from "@/app/ui/GoalCards/GoalCards";
import TransactionCard from "@/app/ui/TransactionCards/transactionCard";
import CalendarCard from "@/app/ui/CalendarCard/calendarCard";
import Input from "@/app/ui/inputs/inputs";
import PopUp from "@/app/ui/pop-ups/pop-ups";
import PageHeader from "./ui/page-headers/page-header";
import Nav from "./ui/navbar/navbar";
import TextField from "./ui/TextField/TextField";

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
}
/*  return (
        <div>
            <PopUp
                message='Saved!'
                onClose={() => {}}
                buttons={[
                    {
                        label: "Close",
                        className: "popup_dark_button",
                        textClassName: "popup_dark_button_text",
                    },
                ]}
            />
            <PopUp
                message='Deleted!'
                onClose={() => {}}
                buttons={[
                    {
                        label: "Close",
                        className: "popup_dark_button",
                        textClassName: "popup_dark_button_text",
                    },
                ]}
            />
            <PopUp
                message='Not Enough Coins!'
                onClose={() => {}}
                buttons={[
                    {
                        label: "Go Customize",
                        className: "popup_light_button",
                        textClassName: "popup_light_button_text",
                        navigateTo: "/",
                    },
                    {
                        label: "Close",
                        className: "popup_dark_button",
                        textClassName: "popup_dark_button_text",
                    },
                ]}
            />
            <PopUp
                message='Coins have been added to your MooMoo fund!'
                onClose={() => {}}
                buttons={[
                    {
                        label: "Check on MooMoo",
                        className: "popup_light_button",
                        textClassName: "popup_light_button_text",
                        navigateTo: "/",
                    },
                    {
                        label: "Close",
                        className: "popup_dark_button",
                        textClassName: "popup_dark_button_text",
                    },
                ]}
            />
            <PopUp
                message='Goal removed'
                onClose={() => {}}
                buttons={[
                    {
                        label: "Undo",
                        className: "edit_button",
                        textClassName: "popup_light_button_text",
                        navigateTo: "/",
                    },
                    {
                        label: "Close",
                        className: "popup_dark_button",
                        textClassName: "popup_dark_button_text",
                    },
                ]}
            />
            <PopUp
                message='Your goal was created!'
                onClose={() => {}}
                buttons={[
                    {
                        label: "Close",
                        className: "popup_dark_button",
                        textClassName: "popup_dark_button_text",
                    },
                    {
                        label: "Edit Goal",
                        className: "popup_light_button",
                        textClassName: "popup_light_button_text",
                        navigateTo: "/",
                    },
                ]}
            />
            
            <h3>Email</h3>
            <Input
                size='login'
                type='text'
                className={styles.input}
                onChange={() => {}}
            />
            <PageHeader
                placeholder='Hello, John!'
                type='header_title'
                header='expense_homepage'
                text='Test'
            />
            <Nav />
            <div className={styles.small}>
                <Coins />
                <Button
                    color='light'
                    value='check out da goals'
                    href='/Goals'
                />
                <Button
                    color='light'
                    value='check out da Rewards'
                    href='/Rewards'
                />
                <Input />
                <PopUps />
                <PageHeader />
            </div>
            <Button
                value='JANUARY'
                href='/Expense/overview/Weekly/January'></Button>
            <Button
                value='FEBRUARY'
                href='/Expense/overview/Weekly/February'></Button>
            <Button
                color='light'
                value='da shop'
                href='/Cow/Shop'
            />

            <Button imageSrc='/right_arrow.svg' />
            <GoalProgress />
        </div>
    );
}
*/
