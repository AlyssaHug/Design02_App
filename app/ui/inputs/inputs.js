import classNames from "classnames";
import styles from "@/app/ui/inputs/inputs.module.css";
import { Libre_Franklin } from "next/font/google";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

export default function Inputs({
    type,
    value,
    onChange,
    placeholder,
    size,
    color,
    disabled,
    maxLength,
}) {
    const inputClasses = classNames(styles.input, libreFranklin.variable, {
        [styles.text]: type === "text",
        [styles.number]: type === "number",
        [styles.password]: type === "password",
        [styles.email]: type === "email",
        [styles.search]: type === "search",
        [styles.caption]: size === "caption",
        [styles.dark]: color === "dark",
        [styles.light]: color === "light",
        [styles.disabled]: disabled,
    });

    return (
        <input
            className={inputClasses}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            maxLength={maxLength}
            disabled={disabled}
        />
    );
}
