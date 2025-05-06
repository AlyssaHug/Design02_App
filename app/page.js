"use client";
import GoalProgress from "./ui/GoalCards/GoalCards";
import { Goals } from "./ui/GoalCards/GoalCards";
import { GoalRecs } from "./ui/GoalCards/GoalCards";
import styles from "@/app/ui/GoalCards/GoalCards.module.css";
import Button from "./ui/Buttons/Buttons";
import { GoalCow, GoalDetailed } from "./ui/GoalCards/GoalCards";
import ShopItem from "./ui/ShopItem/ShopItem";

function page() {
    return (
        <div>
            <Button
                color='light'
                value='check out da goals'
                href='Goals'
            />
            <Button
                color='light'
                value='check out da Rewards'
                href='Rewards'
            />
            <ToggleButton />
            <GoalProgress
                value='Goal Progress'
                type='progress'
            />
        </div>
    );
}

export default Page;