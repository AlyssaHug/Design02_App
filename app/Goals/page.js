import GoalProgress from "@/app//ui/GoalCards/GoalCards";
import { Goals } from "@/app/ui/GoalCards/GoalCards";
import { GoalRecs } from "@/app/ui/GoalCards/GoalCards";
import styles from "@/app/ui/GoalCards/GoalCards.module.css";
import Button from "@/app/ui/Buttons/Buttons";
import { GoalCow } from "@/app/ui/GoalCards/GoalCards";
import Nav from "../ui/navbar/navbar";
import React from "react";
function page() {
    return (
        <div>
            <Nav />
            <h1>Welcome to da goals</h1>

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
                    href='/Goals/GoalRecs'
                />
            </div>
            <div className={styles.recsContent}>
                <GoalRecs value='Spend $50 less on games!' />
                <GoalRecs value='Spend $50 less on games!' />
            </div>
            <div className='checkMoo'>
                <div className={styles.subheaderContent}>
                    <h3 className='subheader'>Your cow friend!</h3>
                </div>
                <GoalCow
                    type='goalCow'
                    value='Check on MooMoo!'
                    text='Go!'
                    imageSrc='moomoonormal.svg'
                />
            </div>
        </div>
    );
}

export default page;
