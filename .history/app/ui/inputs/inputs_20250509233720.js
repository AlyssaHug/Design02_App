import classNames from "classnames";
import styles from "@/app/ui/inputs/inputs.module.css";
import { Libre_Franklin } from "next/font/google";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

export default function Input({
    type,
    value,
    onChange,
    placeholder,
    size,
    color,
    disabled,
    maxLength
    
}) {
    const inputClasses = classNames(styles.input, libreFranklin.variable, {
        [styles.login]: type === "login",
        [styles.expense]: type === "expense",
        [styles.goal]: type === "goal",
        [styles.account]: type === "account",
        [styles.paragraph]: type === "paragraph",
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