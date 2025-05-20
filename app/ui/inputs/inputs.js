import classNames from "classnames";
import styles from "@/app/ui/inputs/inputs.module.css";
import { Libre_Franklin } from "next/font/google";
import React from "react";

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
        [styles.login]: size === "login",
        [styles.expense]: size === "expense",
        [styles.goal]: size === "goal",
        [styles.account_large]: size === "account_large",
        [styles.paragraph]: size === "paragraph",
        [styles.dark]: color === "dark",
        [styles.light]: color === "light",
        [styles.password]: size === "pass",
    });

    return (
        <input
            className={inputClasses}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            maxLength={maxLength}
            size={size}
            disabled={disabled}
        />
    );
}
