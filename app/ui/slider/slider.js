import classNames from "classnames";
import { Quicksand, Libre_Franklin } from "next/font/google";
import Button from "@/app/ui/Buttons/Buttons";
import styles from "@/app/ui/slider/slider.module.css";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});
const quicksand = Quicksand({
    variable: "--font-quicksand",
});

export default function Slider({
    onPlayClick,
    onPetClick,
    onFeedClick,
    onCustomizeClick,
    onShopClick,
    activeButton,
}) {
    return (
        <div className={styles.slider}>
            <Button
                value="Play"
                color="light-blue"
                onClick={onPlayClick}
                customClass={styles.lightBlueOverride}
                isCowActive={activeButton === "Play"} // Changed to isCowActive
            />
            <Button
                value="Pet"
                color="light-blue"
                onClick={onPetClick}
                customClass={styles.lightBlueOverride}
                isCowActive={activeButton === "Pet"} // Changed to isCowActive
            />
            <Button
                value="Feed"
                color="light-blue"
                onClick={onFeedClick}
                customClass={styles.lightBlueOverride}
                isCowActive={activeButton === "Eat"} 
            />
            <Button
                value="Customize"
                color="light-blue"
                onClick={onCustomizeClick}
                customClass={styles.lightBlueOverride}
                isCowActive={activeButton === "Customize"} 
                href="/Cow/Customize"
            />
            <Button
                value="Shop"
                color="light-blue"
                onClick={onShopClick}
                customClass={styles.lightBlueOverride}
                isCowActive={activeButton === "Shop"} 
                href="/Cow/Shop"
            />
        </div>
    );
}