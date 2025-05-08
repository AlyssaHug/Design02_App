"use client";
import CowPage from "./Cow/cow";
import Moomoo from "./ui/moomoo/moomoo";
import Coins from "@/app/ui/coins/coins";
import styles from "@/app/Customize/styles.module.css";

export default function Page() {
    return (
        <div>
            <div className={styles.sameRow}>
                <img
                    src="/left_arrow.svg"
                    alt="Back arrow"
                />
                <h1 className={styles.header}>Customize</h1>
                <div className={styles.coins}>
                    <Coins
                        value="Coins: "
                        coin={990}
                    />
                </div>
            </div>
            <div className={styles.cowContainer}>
                <div className={styles.cowback}></div>

                <div className={styles.mooplace}>
                    <Moomoo
                        size="dressup"
                        src="/moomoonormal.svg"
                        className={styles.moomooSvg}
                    />
                </div>
            </div>
        </div>
    );
}
