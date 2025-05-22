import { GoalCow } from "@/app/ui/GoalCards/GoalCards";
import Button from "@/app/ui/Buttons/Buttons";
import styles from "@/app/Goals/GoalRecs/styles.module.css";
import { Libre_Franklin } from "next/font/google";
import Nav from "@/app/ui/navbar/navbar";
import PageHeader from "@/app/ui/page-headers/page-header";
const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
    subsets: ["latin"],
    display: "swap",
});
export default function page() {
    return (
        <div className={styles.page}>
            <Nav />
            <div className={styles.header}>
                <PageHeader
                    header='goal_header'
                    text='Goal Recommendations'
                    type='header_title'
                />
            </div>
            <div className={styles.content}>
                <div className={styles.info}>
                    <h3>Based on your recent purchases:</h3>
                </div>
                <div className={styles.item}>
                    <GoalCow
                        title='Goal One'
                        type='goalCow'
                        value='Spend $50 less on games this month!'
                        text='+'
                        imageSrc='/moomoonormal.svg'
                    />
                </div>
                <div className={styles.item}>
                    <GoalCow
                        className={styles.item}
                        title='Goal Two'
                        type='goalCow'
                        value='Spend $40 less on takeout!'
                        text='+'
                        imageSrc='/moomoonormal.svg'
                    />
                </div>
                <div className={styles.item}>
                    <GoalCow
                        className={styles.item}
                        title='Goal Three'
                        type='goalCow'
                        value='Spend only $40 on clothes this month!'
                        text='+'
                        imageSrc='/moomoonormal.svg'
                    />
                </div>
            </div>
        </div>
    );
}
