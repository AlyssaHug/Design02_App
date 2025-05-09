"use client";
import classNames from "classnames";
import styles from "@/app/Cow/Shop/styles.module.css";
import ShopItem from "@/app/ui/ShopItem/ShopItem";
import Nav from "@/app/ui/navbar/navbar";
import Coins from "@/app/ui/coins/coins";
import { useState } from "react";

export default function Page() {
    const [coins, setCoins] = useState(900);
    function purchaseItem(value) {
        if (coins < value) {
            console.log("not enought coins");
            return;
        }
        console.log("hiiiiiiii");
        const currentCoins = coins - value;
        setCoins(currentCoins);
    }
    return (
        <div className={styles.page}>
            <Nav />
            <div className={styles.sameRow}>
                <img
                    src='/left_arrow.svg'
                    alt='back arrow'
                />
                <div className={styles.coins}>
                    <Coins
                        value='Coins: '
                        coin={coins}
                    />
                </div>
            </div>
            <div className={styles.gridItems}>
                <div className={styles.shopItem}>
                    <ShopItem
                        name='Flower Crown'
                        imageSrc='/flower.svg'
                        value={90}
                        onClick={() => purchaseItem(90)}
                    />
                </div>
                <div className={styles.shopItem}>
                    <ShopItem
                        name='Ice Cream Hat'
                        imageSrc='/icecream.svg'
                        value={90}
                        onClick={() => purchaseItem(90)}
                    />
                </div>
                <div className={styles.shopItem}>
                    <ShopItem
                        name='Royal Dress'
                        imageSrc='/royaldress.svg'
                        value={140}
                        onClick={() => purchaseItem(140)}
                    />
                </div>
                <div className={styles.shopItem}>
                    <ShopItem
                        name='Dapper Suit'
                        imageSrc='/fancysuit.svg'
                        value={250}
                        onClick={() => purchaseItem(250)}
                    />
                </div>
                <div className={styles.shopItem}>
                    <ShopItem
                        name='Mini Friend (Cat)'
                        imageSrc='/kitty.svg'
                        value={90}
                        onClick={() => purchaseItem(90)}
                    />
                </div>
                <div className={styles.shopItem}>
                    <ShopItem
                        name='Mini Friend (Dog)'
                        imageSrc='/puppy.svg'
                        value={90}
                        onClick={() => purchaseItem(90)}
                    />
                </div>
            </div>
        </div>
    );
}
