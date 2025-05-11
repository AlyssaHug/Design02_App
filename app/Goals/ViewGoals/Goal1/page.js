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
                    progress={90}
                    goal={100}
                />
            </div>
            <p className={styles.details}>
                Goal type: General
                <br />
                Deposit frequency: $15 a week
                <br />
                Started on: March 26, 2025
                <br />
                Achieve by: April 27, 2025
            </p>
            <div className={styles.tip}>
                <p className={styles.tipText}>
                    <span className={styles.tipTitle}>MooMoo Tip:</span>
                    <br />
                    You've got this! Don't milk your wallet dry, save wisely!
                </p>
                <div className={styles.moo}>
                    <Moomoo src='/moomoonormal.svg' />
                </div>
            </div>
            <div className={styles.rewardCoins}>
                <p className={styles.reward}>Reward upon completion:</p>
                <span className={styles.coin}>90 coins</span>
            </div>
        </div>
    );
}
