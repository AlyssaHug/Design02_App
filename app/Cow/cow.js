"use client";
import Coins from "@/app/ui/coins/coins";
import Nav from "@/app/ui/navbar/navbar";
import Slider from "@/app/ui/slider/slider";
import { useState, useEffect } from "react";
import styles from "@/app/Cow/cow.module.css";
import { useRouter } from "next/navigation";

export default function CowPage() {
    const [coins, setCoins] = useState(900);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedCoins = localStorage.getItem("coins");
            setCoins(storedCoins ? parseInt(storedCoins) : 900);
        }
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.sliderContainer}>
                <Slider />
            </div>
            <Nav />
            <div className={styles.sameRow}>
                <img
                    src='/left_arrow.svg'
                    alt='Back arrow'
                />
                <h1 className={styles.header}>MooMoo</h1>
                <div className={styles.coins}>
                    <Coins
                        value='Coins: '
                        coin={coins}
                    />
                </div>
            </div>
            <div className={styles.background}>
                <img
                    src='/grassbg.jpg'
                    className={styles.backgroundImage}
                    alt='Grass field background'
                />
            </div>
        </div>
    );
}
