import classNames from "classnames";
import styles from "@/app/Goals/ViewGoals/Goal1/styles.module.css";
import ProgressBar from "@/app/ui/ProgressBar/ProgressBar";
import Nav from "@/app/ui/navbar/navbar";
import { Libre_Franklin, Quicksand } from "next/font/google";
import Moomoo from "@/app/ui/moomoo/moomoo";

const quicksand = Quicksand({
    variable: "--font-quicksand",
});
const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

export default function page() {
    return (
        <div className={styles.page}>
            <Nav />
            <div classname={styles.progress}>
                <h3 className={styles.progressHeader}>Progress</h3>
                <ProgressBar
                    progress={30}
                    goal={100}
                    textColor='#4caf50'
                />
            </div>
            <p className={styles.details}>
                Goal type: Personal
                <br />
                Deposit frequency: $200 bi-weekly
                <br />
                Started on: january 1, 2025
                <br />
                Achieve by: January 1, 2026
            </p>
            <div className={styles.tip}>
                <p className={styles.tipText}>
                    <span className={styles.tipTitle}>MooMoo Tip:</span>
                    <br />
                    You can do this! Moo-re savings, moo-re peace of mind!
                </p>
                <div className={styles.moo}>
                    <Moomoo src='/moomoonormal.svg' />
                </div>
            </div>
            <div className={styles.rewardCoins}>
                <p className={styles.reward}>Reward upon completion:</p>
                <span className={styles.coin}>300 coins</span>
            </div>
        </div>
    );
}
