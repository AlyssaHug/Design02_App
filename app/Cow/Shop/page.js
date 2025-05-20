"use client";
import classNames from "classnames";
import styles from "@/app/Cow/Shop/styles.module.css";
import ShopItem from "@/app/ui/ShopItem/ShopItem";
import Nav from "@/app/ui/navbar/navbar";
import Coins from "@/app/ui/coins/coins";
import Button from "@/app/ui/Buttons/Buttons";
import { useState, useEffect } from "react";

const shopItems = [
    {
        id: 1,
        name: "Flower Crown",
        price: 90,
        itemId: "flowercrown",
        requiresLarge: false,
    },
    {
        id: 2,
        name: "Ice Cream Hat",
        price: 90,
        itemId: "icecream",
        requiresLarge: false,
    },
    {
        id: 3,
        name: "Royal Dress",
        price: 140,
        itemId: "dress",
        requiresLarge: true,
    },
    {
        id: 4,
        name: "Dapper Suit",
        price: 250,
        itemId: "suit",
        requiresLarge: true,
    },
    {
        id: 5,
        name: "Mini Friend (Cat)",
        price: 90,
        itemId: "cat",
        requiresLarge: false,
    },
    {
        id: 6,
        name: "Mini Friend (Dog)",
        price: 90,
        itemId: "dog",
        requiresLarge: false,
    },
];

const imageMap = {
    flowercrown: "flowercrown.svg",
    icecream: "icecream.svg",
    dress: "dress.svg",
    suit: "suit.svg",
    cat: "cat.svg",
    dog: "dog.svg",
};

export default function Page() {
    const [coins, setCoins] = useState(900);
    const [purchasedItems, setPurchasedItems] = useState([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedCoins = localStorage.getItem("coins");
            let storedItems =
                JSON.parse(localStorage.getItem("purchasedItems")) || [];
            // Remove duplicates and filter invalid items
            storedItems = Array.from(
                new Map(storedItems.map((item) => [item.itemId, item])).values()
            ).filter(
                (item) =>
                    item.itemId &&
                    shopItems.some(
                        (shopItem) => shopItem.itemId === item.itemId
                    )
            );
            setCoins(storedCoins ? parseInt(storedCoins) : 900);
            setPurchasedItems(storedItems);
            // Update localStorage to reflect cleaned items
            localStorage.setItem("purchasedItems", JSON.stringify(storedItems));
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
                <div className={styles.arrow}>
                    <Button
                        imageSrc='/left_arrow.svg'
                        onClick={() => router.back()}
                    />
                </div>
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
                            imageSrc={`/${imageMap[item.itemId]}`}
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
