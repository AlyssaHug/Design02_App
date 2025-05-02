import ToggleButton from "@/app/ui/Buttons/ToggleButton";
import GoalProgress from "./ui/GoalCards/GoalCards";
import { Goals } from "./ui/GoalCards/GoalCards";
import { GoalRecs } from "./ui/GoalCards/GoalCards";
import styles from "@/app/ui/GoalCards/GoalCards.module.css";
import Button from "./ui/Buttons/Buttons";

function page() {
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
        </div>
    );
}
export default page;
