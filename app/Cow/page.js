"use client";
import Moomoo from "@/app/ui/moomoo/moomoo";
import styles from "@/app/Cow/styles.module.css";
import Coins from "@/app/ui/coins/coins";
import Nav from "@/app/ui/navbar/navbar";
import Slider from "@/app/ui/slider/slider";
import Button from "@/app/ui/Buttons/Buttons";
import { useState } from "react";

export default function Page() {
    const [moomooImage, setMoomooImage] = useState("/outfitsmoomoo.svg");
    const [activeButton, setActiveButton] = useState(null);

    const handlePlayClick = () => {
        setMoomooImage("/play.svg");
        setActiveButton("Play");
    };

    const handlePetClick = () => {
        setMoomooImage("/pet.svg");
        setActiveButton("Pet");
    };

    const handleFeedClick = () => {
        setMoomooImage("/eat.svg");
        setActiveButton("Eat");
    };

    const handleCustomizeClick = () => {
        setActiveButton("Customize");
    };

    const handleShopClick = () => {
        setActiveButton("Shop"); // AAAAA I CANT GET U TO WORK
    };

    return (
        <div className={styles.container}>
            <div className={styles.sameRow}>
                <Button imageSrc="/left_arrow.svg" />
                <h1 className={styles.header}>MooMoo</h1>
                <div className={styles.coins}>
                    <Coins
                        value="Coins: "
                        coin={990}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.bg}>
                    <div className={styles.moomoo}>
                        <Moomoo
                            size="interaction"
                            src={moomooImage}
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
