"use client";
import Moomoo from "@/app/ui/moomoo/moomoo";
import styles from "@/app/Cow/styles.module.css";
import Coins from "@/app/ui/coins/coins";
import Nav from "@/app/ui/navbar/navbar";
import Slider from "@/app/ui/slider/slider";
import Button from "@/app/ui/Buttons/Buttons";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
    const [moomooImage, setMoomooImage] = useState("/outfitsmoomoo.svg");
    const [activeButton, setActiveButton] = useState(null);
    const router = useRouter();

    // Load selected accessory SVG from localStorage on mount
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedAccessory = localStorage.getItem("selectedMoomooSrc");
            if (savedAccessory) {
                console.log("Page: Loaded accessory SVG from localStorage:", savedAccessory);
                setMoomooImage(savedAccessory);
            }
        }
    }, []);

    const handlePlayClick = () => {
        console.log("Page: Setting moomooImage to /play.svg");
        setMoomooImage("/play.svg");
        setActiveButton("Play");
    };

    const handlePetClick = () => {
        console.log("Page: Setting moomooImage to /pet.svg");
        setMoomooImage("/pet.svg");
        setActiveButton("Pet");
    };

    const handleFeedClick = () => {
        console.log("Page: Setting moomooImage to /eat.svg");
        setMoomooImage("/eat.svg");
        setActiveButton("Feed");
    };

    const handleCustomizeClick = () => {
        console.log("Page: Navigating to Customize");
        setActiveButton("Customize");
        router.push("/Cow/Customize");
    };

    const handleShopClick = () => {
        console.log("Page: Navigating to Shop");
        setActiveButton("Shop");
        router.push("/Cow/Shop");
    };

    console.log("Page: Rendering Moomoo with src:", moomooImage);

    return (
        <div className={styles.container}>
            <div className={styles.sameRow}>
                <Button imageSrc="/left_arrow.svg" href="/Cow" />
                <h1 className={styles.header}>MooMoo</h1>
                <div className={styles.coins}>
                    <Coins value="Coins: " coin={990} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.bg}>
                    <div className={styles.moomoo}>
                        <Moomoo
                            size="interaction"
                            src={`${moomooImage}?v=${Date.now()}`}
                        />
                    </div>
                    <div className={styles.sliderContainer}>
                        <Slider
                            onPlayClick={handlePlayClick}
                            onPetClick={handlePetClick}
                            onFeedClick={handleFeedClick}
                            onCustomizeClick={handleCustomizeClick}
                            onShopClick={handleShopClick}
                            activeButton={activeButton}
                        />
                    </div>
                </div>
                <Nav />
            </div>
        </div>
    );
}