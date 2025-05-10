"use client";
import classNames from "classnames";
import styles from "@/app/Cow/Shop/styles.module.css";
import ShopItem from "@/app/ui/ShopItem/ShopItem";
import Nav from "@/app/ui/navbar/navbar";
import Coins from "@/app/ui/coins/coins";
import { useState } from "react";

export default function Page() {
    const [coins, setCoins] = useState(900);
    const [purchasedItems, setPurchasedItems] = useState({});
    function purchaseItem(value, itemId) {
        if (coins < value) {
            alert("Not enough coins for this purchase :(");
            return;
        }
        console.log("hiiiiiiii");
        const currentCoins = coins - value;
        setCoins(currentCoins);
        setPurchasedItems((prev) => {
            const newPurchasedItems = { ...prev, [itemId]: true };
            console.log("Updated purchasedItems:", newPurchasedItems);
            return newPurchasedItems;
        });
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
                        type='shop'
                        isBought={purchasedItems["flower-crown"]}
                        onClick={() => purchaseItem(90, "flower-crown")}
                    />
                </div>
                <div className={styles.shopItem}>
                    <ShopItem
                        name='Ice Cream Hat'
                        imageSrc='/icecream.svg'
                        value={90}
                        type='shop'
                        isBought={purchasedItems["ice-cream-hat"]}
                        onClick={() => purchaseItem(90, "ice-cream-hat")}
                    />
                </div>
                <div className={styles.shopItem}>
                    <ShopItem
                        name='Royal Dress'
                        imageSrc='/royaldress.svg'
                        value={140}
                        type='shop'
                        isBought={purchasedItems["royal-dress"]}
                        onClick={() => purchaseItem(140, "royal-dress")}
                    />
                </div>
                <div className={styles.shopItem}>
                    <ShopItem
                        name='Dapper Suit'
                        imageSrc='/fancysuit.svg'
                        value={250}
                        type='shop'
                        isBought={purchasedItems["dapper-suit"]}
                        onClick={() => purchaseItem(250, "dapper-suit")}
                    />
                </div>
                <div className={styles.shopItem}>
                    <ShopItem
                        name='Mini Friend (Cat)'
                        imageSrc='/kitty.svg'
                        value={90}
                        type='shop'
                        isBought={purchasedItems["mini-friend-cat"]}
                        onClick={() => purchaseItem(90, "mini-friend-cat")}
                    />
                </div>
                <div className={styles.shopItem}>
                    <ShopItem
                        name='Mini Friend (Dog)'
                        imageSrc='/puppy.svg'
                        value={90}
                        type='shop'
                        isBought={purchasedItems["mini-friend-dog"]}
                        onClick={() => purchaseItem(90, "mini-friend-dog")}
                    />
                </div>
            </div>
        </div>
    );
}
