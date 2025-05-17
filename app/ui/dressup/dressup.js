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

const defaultAccessories = [
    {
        imageSrc: "/moomoo-dressup/bow.png",
        moomooSrc: "/bowmoomoo.svg",
        value: "Bow",
        requiresLarge: false,
        id: "default-bow",
    },
    {
        imageSrc: "/moomoo-dressup/sunglasses.png",
        moomooSrc: "/sunglassmoomoo.svg",
        value: "Sunglasses",
        requiresLarge: false,
        id: "default-sunglasses",
    },
    {
        imageSrc: "/moomoo-dressup/moustache.png",
        moomooSrc: "/susmoomoo.svg",
        value: "Dapper",
        requiresLarge: false,
        id: "default-dapper",
    },
];

const imageMap = {
    flowercrown: {
        imageSrc: "accessories/flowercrown.svg",
        moomooSrc: "/flowercrown.svg",
    },
    icecream: {
        imageSrc: "accessories/icecream.svg",
        moomooSrc: "/icecream.svg",
    },
    dress: {
        imageSrc: "accessories/dress.svg",
        moomooSrc: "/dress.svg",
    },
    suit: {
        imageSrc: "accessories/suit.svg",
        moomooSrc: "/suit.svg",
    },
    cat: {
        imageSrc: "accessories/cat.svg",
        moomooSrc: "/cat.svg",
    },
    dog: {
        imageSrc: "accessories/dog.svg",
        moomooSrc: "/dog.svg",
    },
};

export default function Dressup({ onSelectAccessory }) {
    const [accessories, setAccessories] = useState(defaultAccessories);

    useEffect(() => {
        if (typeof window !== "undefined") {
            let purchasedItems = JSON.parse(localStorage.getItem("purchasedItems")) || [];
            purchasedItems = Array.from(
                new Map(purchasedItems.map((item) => [item.itemId, item])).values()
            ).filter((item) => item.itemId && imageMap[item.itemId]);
            const purchasedAccessories = purchasedItems.map((item) => ({
                imageSrc: `/${imageMap[item.itemId].imageSrc}`,
                moomooSrc: imageMap[item.itemId].moomooSrc,
                value: item.name,
                requiresLarge: item.requiresLarge || false,
                id: `purchased-${item.itemId}`,
            }));
            console.log("Dressup: Loaded accessories:", JSON.stringify([...defaultAccessories, ...purchasedAccessories], null, 2));
            setAccessories([...defaultAccessories, ...purchasedAccessories]);
        }
    }, []);

    const handleButtonClick = (moomooSrc) => {
        console.log("Dressup: Button clicked, passing moomooSrc:", moomooSrc);
        onSelectAccessory(moomooSrc || "/outfitsmoomoo.svg");
    };

    return (
        <div className={styles.dressup}>
            {accessories.map((accessory) => (
                <div
                    key={accessory.id}
                    className={classNames({
                        [styles.textfix]: defaultAccessories.includes(accessory),
                    })}
                >
                    <Button
                        imageSrc={accessory.imageSrc}
                        value={accessory.value}
                        color="light-blue"
                        customClass={classNames({
                            [styles.dressupButton]: !accessory.requiresLarge,
                            [styles.large]: accessory.requiresLarge,
                        })}
                        onClick={() => handleButtonClick(accessory.moomooSrc)}
                    />
                </div>
            ))}
        </div>
    );
}