import classNames from "classnames";
import styles from "@/app/Goals/ViewGoals/Goal1/styles.module.css";
import ProgressBar from "@/app/ui/ProgressBar/ProgressBar";
import Nav from "@/app/ui/navbar/navbar";
import { Libre_Franklin, Quicksand } from "next/font/google";
import Moomoo from "@/app/ui/moomoo/moomoo";
import PageHeader from "@/app/ui/page-headers/page-header";

const quicksand = Quicksand({
    variable: "--font-quicksand",
    subsets: ["latin"],
    display: "swap",
});
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
                    text='Add $50 to tuition fund!'
                    type='header_title'
                />
            </div>
            <div classname={styles.progress}>
                <h3 className={styles.progressHeader}>Progress</h3>
                <ProgressBar
                    progress={60}
                    goal={100}
                />
            </div>
            <p className={styles.details}>
                Goal type: School
                <br />
                Deposit frequency: $15 a week
                <br />
                Started on: March 1, 2025
                <br />
                Achieve by: March 31, 2025
            </p>
            <div className={styles.tip}>
                <p className={styles.tipText}>
                    <span className={styles.tipTitle}>MooMoo Tip:</span>
                    <br />
                    You've got this! moo-tiply your savings!
                </p>
                <div className={styles.moo}>
                    <Moomoo src='/moomoonormal.svg' />
                </div>
            </div>
            <div className={styles.rewardCoins}>
                <p className={styles.reward}>Reward upon completion:</p>
                <span className={styles.coin}>50 coins</span>
            </div>
        </div>
    );
}
