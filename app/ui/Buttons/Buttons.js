import classNames from "classnames";
import { Libre_Franklin } from "next/font/google";
import styles from "@/app/ui/Buttons/Buttons.module.css";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

// icon: icon
// onClick: function

export default function Button({
    style,
    type,
    color,
    imageSrc,
    alt,
    size,
    value,
    onClick,
}) {
    const buttonClasses = classNames(styles.button, libreFranklin.variable, {
        [styles.view]: type === "view",
        [styles.outline]: type === "outline",
        [styles.primary]: type === "primary",
        [styles.close]: type === "close",
        [styles.lightBlue]: color === "light-blue",
        [styles.darkBlue]: color === "dark-blue",
        [styles.dark]: color === "dark",
        [styles.light]: color === "light",
        [styles.secondary]: type === "secondary",
        [styles.round]: style === "round",
        [styles.shop]: type === "shop",
        [styles.bought]: type === "bought",
        [styles.nav]: color === "nav",
        [styles.navActive]: color === "nav-active",
        [styles.expense]: type === "expense",
        [styles.home]: type === "home",
        [styles.caption]: size === "caption",
        [styles.cow]: color === "cow",
        [styles.cowActive]: color === "cow-active",
        [styles.goalMoo]: type === "goalMoo",
    });

    return (
        <button
            className={buttonClasses}
            value={value}>
            {imageSrc && (
                <img
                    src={imageSrc}
                    alt={alt}
                />
            )}
            <span>{value}</span>
        </button>
    );
}
