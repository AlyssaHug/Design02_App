import classNames from "classnames";
import styles from "@/app/ui/TextField/TextField.module.css";
import { Libre_Franklin } from "next/font/google";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

export default function TextField({ value, type, placeholder, size, color }) {
    const inputClasses = classNames(styles.input, libreFranklin.variable, {
        [styles.text]: type === "text",
        [styles.number]: type === "number",
        [styles.password]: type === "password",
        [styles.email]: type === "email",
        [styles.caption]: size === "caption",
        [styles.dark]: color === "dark",
        [styles.light]: color === "light",
        [styles.large]: size === "large",
    });
    return (
        <div>
            <h3 className={styles.title}>{value}</h3>
            <input
                className={inputClasses}
                color={color}
                type={type}
                size={size}
                placeholder={placeholder}></input>
        </div>
    );
}
