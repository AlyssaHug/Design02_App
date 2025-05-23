"use client";
import classNames from "classnames";
import { Quicksand, Libre_Franklin } from "next/font/google";
import styles from "@/app/ui/Buttons/Buttons.module.css";
import React from "react";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});
const quicksand = Quicksand({
    variable: "--font-quicksand",
});

export default function Button({
    style,
    type,
    color,
    imageSrc,
    alt,
    size,
    value,
    coinValue,
    coins,
    onClick,
    href,
    target = "_self",
    customClass, // Add customClass to props
}) {
    function handleClick() {
        if (!href) {
            console.error("href is missing");
            return;
        }
        window.open(href, target);
    }
    const buttonClasses = classNames(
        styles.button,
        quicksand.variable,
        libreFranklin.variable,
        customClass, // Include customClass here
        {
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
            [styles.coins]: type === "coins",
            [styles.coins]: color === "coin-border",
        }
    );

    return (
        <button
            className={buttonClasses}
            value={value}
            onClick={handleClick}>
            {imageSrc && (
                <img
                    src={imageSrc}
                    alt={alt}
                />
            )}

            <span>
                {coins}
                {coinValue}
            </span>
            <p>{value}</p>
        </button>
    );
}
