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
}) {
    return (
        <div className={styles.slider}>
            <Button
                value="Play"
                color="light-blue"
                onClick={onPlayClick}
                customClass={styles.lightBlueOverride}
            />
            <Button
                value="Pet"
                color="light-blue"
                onClick={onPetClick}
                customClass={styles.lightBlueOverride}
            />
            <Button
                value="Feed"
                color="light-blue"
                onClick={onFeedClick}
                customClass={styles.lightBlueOverride}
            />
            <Button
                value="Customize"
                color="light-blue"
                onClick={onCustomizeClick}
                customClass={styles.lightBlueOverride}
                href="/Cow/Customize"
            />
            <Button
                value="Shop"
                color="light-blue"
                onClick={onShopClick}
                customClass={styles.lightBlueOverride}
                href="/Cow/Shop"
            />
        </div>
    );
}