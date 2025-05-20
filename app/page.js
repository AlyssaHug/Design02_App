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

export default function Page() {
    return (
        <div>
            <Nav />
        </div>
    );
}
