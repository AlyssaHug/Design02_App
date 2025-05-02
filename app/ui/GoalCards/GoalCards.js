import classNames from "classnames";
import styles from "@/app/ui/GoalCards/GoalCards.module.css";
import Button from "../Buttons/Buttons";
import ProgressBar from "../ProgressBar/ProgressBar";
import { Quicksand, Libre_Franklin } from "next/font/google";

const quicksand = Quicksand({
    variable: "--font-quicksand",
});
const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

export default function GoalProgress({ style, value, type, size, icon }) {
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
