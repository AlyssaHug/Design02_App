"use client";
import Coins from "@/app/ui/coins/coins"
import Nav from "@/app/ui/navbar/navbar";
import Slider from "@/app/ui/slider/slider";

import styles from "@/app/Cow/cow.module.css";


export default function CowPage() {
    return (
        <div className={styles.container}>

            <div className={styles.sliderContainer}>
                <Slider />
            </div>
            <Nav />
            <div className={styles.sameRow}>
                <img
                    src="/left_arrow.svg"
                    alt="Back arrow"
                />
                  <h1 className={styles.header}>MooMoo</h1>
                <div className={styles.coins}>
                    <Coins
                        value="Coins: "
                        coin={990}
                    />
                </div>
            </div>
            <div className={styles.background}>
                <img
                    src="/grassbg.jpg"
                    className={styles.backgroundImage}
                    alt="Grass field background"
                />
            </div>
        </div>
    );
}
