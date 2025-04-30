import classNames from "classnames";
import { Quicksand } from "next/font/google";
import styles from "@/app/ui/Buttons/Buttons.module.css";

const quicksand = Quicksand({
    variable: "--font-quicksand",
});

// icon: icon
// onClick: function

export default function Button({
    style,
    type,
    color,
    icon,
    size,
    value,
    onClick,
}) {
    const buttonClasses = classNames(styles.button, quicksand.variable, {
        [styles.view]: type === "view",
        [styles.outline]: type === "outline",
        [styles.primary]: type === "primary",
        [styles.close]: type === "close",
        [styles.lightBlue]: color === "light-blue",
        [styles.dark]: color === "dark",
        [styles.light]: color === "light",
        [styles.reward]: type === "reward",
        [styles.round]: style === "round",
        [styles.shop]: type === "shop",
        [styles.bought]: type === "bought",
    });

    return (
        <input
            className={buttonClasses}
            type='button'
            value={value}
        />
    );
}
