"use client";
import classNames from "classnames";
import { Quicksand, Libre_Franklin } from "next/font/google";
import Button from "@/app/ui/Buttons/Buttons";
import styles from "@/app/ui/dressup/dressup.module.css";
import { useState, useEffect } from "react";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});
const quicksand = Quicksand({
    variable: "--font-quicksand",
});

// Default accessories (always included)
const defaultAccessories = [
    {
        imageSrc: "/moomoo-dressup/bow.png",
        value: "Bow",
        requiresLarge: false,
        id: "default-bow",
    },
    {
        imageSrc: "/moomoo-dressup/sunglasses.png",
        value: "Sunglasses",
        requiresLarge: false,
        id: "default-sunglasses",
    },
    {
        imageSrc: "/moomoo-dressup/moustache.png",
        value: "Dapper",
        requiresLarge: false,
        id: "default-dapper",
    },
];

// Map Shop itemId to Customize page image paths in /accessories/
const imageMap = {
    flowercrown: "accessories/flowercrown.svg",
    icecream: "accessories/icecream.svg",
    dress: "accessories/dress.svg",
    suit: "accessories/suit.svg", // Adjusted to match likely filename
    cat: "accessories/cat.svg",
    dog: "accessories/dog.svg",
};

export default function Dressup() {
    const [accessories, setAccessories] = useState(defaultAccessories);

    // Load purchased items from localStorage and combine with default accessories
    useEffect(() => {
        if (typeof window !== "undefined") {
            let purchasedItems =
                JSON.parse(localStorage.getItem("purchasedItems")) || [];
            // Remove duplicates and filter invalid items
            purchasedItems = Array.from(
                new Map(
                    purchasedItems.map((item) => [item.itemId, item])
                ).values()
            ).filter((item) => item.itemId && imageMap[item.itemId]);
            // Map purchased items to accessories format
            const purchasedAccessories = purchasedItems.map((item) => ({
                imageSrc: `/${imageMap[item.itemId]}`,
                value: item.name,
                requiresLarge: item.requiresLarge || false,
                id: `purchased-${item.itemId}`,
            }));
            // Combine default and purchased accessories
            setAccessories([...defaultAccessories, ...purchasedAccessories]);
        }
    }, []);

    return (
        <div className={styles.dressup}>
            {accessories.map((accessory) => (
                <div
                    key={accessory.id}
                    className={classNames({
                        [styles.textfix]:
                            defaultAccessories.includes(accessory),
                    })}>
                    <Button
                        imageSrc={accessory.imageSrc}
                        value={accessory.value}
                        color='light-blue'
                        customClass={classNames({
                            [styles.dressupButton]: !accessory.requiresLarge,
                            [styles.large]: accessory.requiresLarge,
                        })}
                    />
                </div>
            ))}
        </div>
    );
}
