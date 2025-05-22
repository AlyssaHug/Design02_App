"use client";
import classNames from "classnames";
import styles from "@/app/ui/TextField/TextField.module.css";
import { Libre_Franklin } from "next/font/google";
import { useState, useEffect, useRef } from "react";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
    subsets: ["latin"],
    display: "swap",
});

export default function TextField({
    value,
    type,
    placeholder,
    size,
    color,
    maxLength = 50,
}) {
    const inputClasses = classNames(styles.input, libreFranklin.variable, {
        [styles.text]: type === "text",
        [styles.number]: type === "number",
        [styles.password]: type === "password",
        [styles.email]: type === "email",
        [styles.caption]: size === "caption",
        [styles.dark]: color === "dark",
        [styles.light]: color === "light",
        [styles.large]: size === "large",
        [styles.round]: size === "round",
        [styles.largerSquare]: size === "larger",
    });
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{value}</h3>
            <input
                className={inputClasses}
                color={color}
                type={type}
                size={size}
                maxLength={maxLength}
                placeholder={placeholder}></input>
        </div>
    );
}

export function TextArea({
    value,
    type = "text",
    placeholder,
    size,
    color,
    maxLength = 200,
}) {
    const [text, setText] = useState("");
    const textareaRef = useRef(null);

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, [text]);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const inputClasses = classNames(styles.input, libreFranklin.variable, {
        [styles.text]: type === "text",
        [styles.number]: type === "number",
        [styles.password]: type === "password",
        [styles.email]: type === "email",
        [styles.caption]: size === "caption",
        [styles.dark]: color === "dark",
        [styles.light]: color === "light",
        [styles.large]: size === "large",
        [styles.round]: size === "round",
    });

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{value}</h3>
            <textarea
                ref={textareaRef}
                className={inputClasses}
                value={text}
                onChange={handleChange}
                placeholder={placeholder}
                maxLength={maxLength}
            />
        </div>
    );
}
