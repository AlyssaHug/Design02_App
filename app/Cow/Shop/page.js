"use client";
import classNames from "classnames";
import styles from "@/app/Cow/Shop/styles.module.css";
import ShopItem from "@/app/ui/ShopItem/ShopItem";
import Nav from "@/app/ui/navbar/navbar";
import Coins from "@/app/ui/coins/coins";
import { useState, useEffect } from "react";

const shopItems = [
    { id: 1, name: "Flower Crown", price: 90, itemId: "flower" },
    { id: 2, name: "Ice Cream Hat", price: 90, itemId: "icecream" },
    { id: 3, name: "Royal Dress", price: 140, itemId: "royal-dress" },
    { id: 4, name: "Dapper Suit", price: 250, itemId: "fancysuit" },
    { id: 5, name: "Mini Friend (Cat)", price: 90, itemId: "kitty" },
    { id: 6, name: "Mini Friend (Dog)", price: 90, itemId: "puppy" },
];

export default function Page() {
    const [coins, setCoins] = useState(900);
    const [purchasedItems, setPurchasedItems] = useState([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedCoins = localStorage.getItem("coins");
            const storedItems =
                JSON.parse(localStorage.getItem("purchasedItems")) || [];
            setCoins(storedCoins ? parseInt(storedCoins) : 900); // Default to 900 if not set
            setPurchasedItems(storedItems);
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("coins", coins);
            localStorage.setItem(
                "purchasedItems",
                JSON.stringify(purchasedItems)
            );
        }
    }, [coins, purchasedItems]);

    function purchaseItem(value, item) {
        if (!item || !item.itemId) {
            console.error("Item is undefined or missing itemId:", item);
            alert("Error: Item not found.");
            return;
        }
        if (coins < value) {
            alert("Not enough coins for this purchase :(");
            return;
        }
        if (
            purchasedItems.some((purchased) => purchased.itemId === item.itemId)
        ) {
            alert("You already own this item!");
            return;
        }
        const currentCoins = coins - value;
        setCoins(currentCoins);
        setPurchasedItems((prev) => {
            const newPurchasedItems = [...prev, item];
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
                {shopItems.map((item) => (
                    <div
                        key={item.id}
                        className={styles.shopItem}>
                        <ShopItem
                            name={item.name}
                            imageSrc={`/${item.itemId.replace(/-/g, "")}.svg`} // Convert itemId to image filename
                            value={item.price}
                            type='shop'
                            isBought={purchasedItems.some(
                                (purchased) => purchased.itemId === item.itemId
                            )}
                            onClick={() => purchaseItem(item.price, item)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
