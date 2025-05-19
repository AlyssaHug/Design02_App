import classNames from "classnames";
import styles from "@/app/ui/GoalCards/GoalCards.module.css";
import Button from "../Buttons/Buttons";
import ProgressBar from "../ProgressBar/ProgressBar";
import { Quicksand, Libre_Franklin } from "next/font/google";
import Moomoo from "../moomoo/moomoo";

const quicksand = Quicksand({
    variable: "--font-quicksand",
});
const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

export default function GoalProgress({
    style,
    value,
    type,

    percetnage,
    size,
    icon,
}) {
    const goalCardClasses = classNames(
        styles.goalCard,
        quicksand.variable,
        libreFranklin.variable,
        {
            [styles.progress]: type === "progress",
        }
    );
    return (
        <div className={goalCardClasses}>
            <div className={styles.headerContainer}>
                <h3 className={styles.header}>{value}</h3>

                <Button
                    className={styles.view}
                    color='dark'
                    value='View Goals'
                    href='Goals/ViewGoals'
                />
            </div>
            <div className={styles.content}>
                <ProgressBar
                    value='Goal 1: Reduce spending by $60!'
                    progress={90}
                    goal={100}
                />
                <ProgressBar
                    value='Goal 2: Add $50 to tuition fund!'
                    progress={60}
                    goal={100}
                />
                <ProgressBar
                    value='Goal 3: Save for a car ($39,000)'
                    progress={30}
                    goal={100}
                    textColor='#4caf50'
                />
            </div>
        </div>
    );
}
export function Goals({ value, type, size, imageSrc, desc }) {
    const goalsClasses = classNames(
        styles.goals,
        quicksand.variable,
        libreFranklin.variable,
        {
            [styles.goals]: type === "goals",
        }
    );
    return (
        <div className={goalsClasses}>
            <div className={styles.goal}>
                <p className={styles.goalText}>{value}</p>
                <img
                    className={styles.goalArrow}
                    src={imageSrc}
                />
            </div>
        </div>
    );
}
export function GoalRecs({ value, type, size, imageSrc, desc, desc2 }) {
    const goalRecsClasses = classNames(
        styles.goalRecs,
        quicksand.variable,
        libreFranklin.variable,
        {
            [styles.recs]: type === "recs",
        }
    );
    return (
        <div className={goalRecsClasses}>
            <div className={styles.rec}>
                <p className={styles.recText}>{value}</p>
                <div className={styles.buttons}>
                    <Button
                        value='Activate'
                        size='caption'
                        color='dark'
                    />

                    <Button
                        value='Dismiss'
                        size='caption'
                        type='secondary'
                    />
                </div>
            </div>
        </div>
    );
}
export function GoalCow({ value, type, imageSrc, text, href, title }) {
    const goalCowClasses = classNames(
        styles.goalCow,
        quicksand.variable,
        libreFranklin.variable,
        {
            [styles.goalCow]: type === "goalCow",
        }
    );
    return (
        <div className={styles.goalCow}>
            <h3 className={styles.subheader}>{title}</h3>
            <div className={styles.cowContent}>
                <p className={styles.cowText}>{value}</p>
                <div className={styles.imageStack}>
                    <Moomoo
                        className={styles.cow}
                        size='goals'
                        src={imageSrc}
                    />
                    <Button
                        className={styles.go}
                        value={text}
                        type='goalMoo'
                        href={href}
                    />
                </div>
            </div>
        </div>
    );
}

export function GoalDetailed({
    name,
    title,
    type,
    start,
    end,
    value,
    style,
    progress,
    goal,
    href,
    textColor = "#fefdfd",
}) {
    const goalDetailedClasses = classNames(
        styles.goalDetail,
        quicksand.variable,
        libreFranklin.variable,
        {
            [styles.style]: type === "font",
        }
    );
    const percentage = (progress / goal) * 100;
    {
        return (
            <div className={styles.container}>
                <h3 className={styles.header}>{name}</h3>
                <ProgressBar
                    progress={progress}
                    goal={goal}
                    textColor={textColor}
                    style={style}
                />
                <div className={styles.goalContent}>
                    <div className={styles.details}>
                        <p>{title}</p>
                        <p>Goal type: {type}</p>
                        <p>Start: {start}</p>
                        <p>End: {end}</p>
                    </div>
                    <div className={styles.imageStack}>
                        <Moomoo
                            size='goals'
                            src='/moomoolayingdown.svg'
                        />
                        <Button
                            value='View More'
                            type='view'
                            href={href}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
