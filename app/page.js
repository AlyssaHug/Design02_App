import ToggleButton from "@/app/ui/Buttons/ToggleButton";
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
            <div className='checkMoo'>
                <GoalCow
                    title='Your Cow Friend!'
                    type='goalCow'
                    value='Check on MooMoo!'
                    text='Go!'
                    imageSrc='moomoonormal.svg'
                />
            </div>
            <GoalDetailed
                name='Goal 1'
                title='Reduce spending by $60!'
                type='General'
                start='March 26, 2025'
                end='April 27, 2025'
                progress={90}
                goal={100}
            />
            <div className='sameSizedButtons'>
                <ShopItem
                    name='Flower Crown'
                    imageSrc='/flower.svg'
                    value='90'
                />
                <ShopItem
                    name='Ice Cream Hat'
                    imageSrc='/icecream.svg'
                    value='60'
                />
            </div>
        </div>
    );
}

export default page;
