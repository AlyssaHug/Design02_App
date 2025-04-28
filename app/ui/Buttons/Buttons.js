import classNames from "classnames";
import styles from "@/app/ui/Buttons/Buttons.module.css";

// icon: icon
// onClick: function

export default function Button({ type, color, icon, size, value, onClick }) {
    const buttonClasses = classNames(styles.button, {
        [styles.view]: type === "view",
        [styles.outline]: type === "outline",
        [styles.primary]: type === "primary",
        [styles.close]: type === "close",
        [styles.popup]: type === "popup",
        [styles.long]: size === "long",
        [styles.dark]: color === "dark",
        [styles.light]: color === "light",
        [styles.small]: size === "small",
        [styles.reward]: type === "reward",
        [styles.signIn]: size === "signIn",
    });

    return (
        <input
            className={buttonClasses}
            type='button'
            value={value}
        />
    );
}
