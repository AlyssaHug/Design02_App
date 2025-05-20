import GoalProgress from "@/app//ui/GoalCards/GoalCards";
import { Goals } from "@/app/ui/GoalCards/GoalCards";
import { GoalRecs } from "@/app/ui/GoalCards/GoalCards";
import Button from "@/app/ui/Buttons/Buttons";
import { GoalCow } from "@/app/ui/GoalCards/GoalCards";
import Nav from "../ui/navbar/navbar";
import React from "react";
import styles from "@/app/Goals/styles.module.css";
import PageHeader from "../ui/page-headers/page-header";
function page() {
    return (
        <div className={styles.page}>
            <Nav />
            <div className={styles.header}>
                <PageHeader
                    header='goal_homepage'
                    text='Goals'
                    type='header_title'
                />
            </div>
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
                    href='/Goals/Create'
                />
            </div>
            <div className={styles.goalsContent}>
                <Goals
                    type='goals'
                    value='Reduce spending by $60!'
                    imageSrc='/right_arrow.svg'
                    href='/Goals/ViewGoals/Goal1'
                />
                <Goals
                    type='goals'
                    value='Add $50 to tuition fund!'
                    imageSrc='/right_arrow.svg'
                    href='/Goals/ViewGoals/Goal2'
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
                    href='/Cow'
                />
            </div>
        </div>
    );
}

export default page;
