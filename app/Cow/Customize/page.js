"use client";
import Moomoo from "@/app/ui/moomoo/moomoo";
import Coins from "@/app/ui/coins/coins";
import styles from "@/app/Cow/Customize/styles.module.css";
import Button from "@/app/ui/Buttons/Buttons";
import Nav from "@/app/ui/navbar/navbar";
import Dressup from "@/app/ui/dressup/dressup";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dressmoo() {
    const [coins, setCoins] = useState(900);
    const [selectedMoomooSrc, setSelectedMoomooSrc] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedCoins = localStorage.getItem("coins");
            setCoins(storedCoins ? parseInt(storedCoins) : 900);
            const savedAccessory = localStorage.getItem("selectedMoomooSrc");
            if (savedAccessory) {
                console.log("Dressmoo: Loaded accessory SVG from localStorage:", savedAccessory);
                setSelectedMoomooSrc(savedAccessory);
            }
        }
    }, []);

    const handleBuyMore = () => {
        console.log("Dressmoo: Navigating to Shop");
        router.push("/Cow/Shop");
    };

    const handleSelectAccessory = (moomooSrc) => {
        console.log("Dressmoo: Received moomooSrc:", moomooSrc);
        setSelectedMoomooSrc(moomooSrc);
        if (typeof window !== "undefined") {
            localStorage.setItem("selectedMoomooSrc", moomooSrc);
            console.log("Dressmoo: Saved moomooSrc to localStorage:", moomooSrc);
        }
    };

    const handleRemoveAccessory = () => {
        console.log("Dressmoo: Removing accessory, resetting to default");
        setSelectedMoomooSrc(null);
        if (typeof window !== "undefined") {
            localStorage.removeItem("selectedMoomooSrc");
            console.log("Dressmoo: Cleared selectedMoomooSrc from localStorage");
        }
    };

    const currentSrc = selectedMoomooSrc || "/outfitsmoomoo.svg";
    const srcWithCacheBust = `${currentSrc}?v=${Date.now()}`;
    console.log("Dressmoo: Rendering Moomoo with src:", srcWithCacheBust);

    return (
        <div className={styles.container}>
            <Nav />
            <div className={styles.sameRow}>
                <div className={styles.arrow}>
                    <Button imageSrc='/left_arrow.svg' href='/Cow' />
                </div>
                <h1 className={styles.header}>Customize</h1>
                <div className={styles.coins}>
                    <Coins value='Coins: ' coin={coins} />
                </div>
            </div>
            <div className={styles.cowContainer}>
                <div className={styles.cowback}></div>
                <div className={styles.mooplace}>
                    <Moomoo
                        size="dressup"
                        src={srcWithCacheBust}
                        className={styles.moomooSvg}
                        key={selectedMoomooSrc || "default"}
                    />
                </div>
            </div>
            <div className={styles.removebutton}>
                <Button
                    color="light-blue"
                    value="Remove"
                    onClick={handleRemoveAccessory}
                />
            </div>
            <div className={styles.buyanditems}>
                <h1 className={styles.items}>Items</h1>
                <div className={styles.shop}>
                    <Button type='shop' value='Buy More' href='/Cow/Shop' />
                </div>
            </div>
            <div className={styles.DressupSlider}>
                <Dressup onSelectAccessory={handleSelectAccessory} />
            </div>
        </div>
    );
}