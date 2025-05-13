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
    disabled,
    text,
    coins,
    onClick,
    isBought,
    isCowActive,
    href,
    target = "_self",
    className,
    customClass,
}) {
    console.log("Button rendered: ", { value, isBought, type, isCowActive, className, customClass });

    function handleClick() {
        if (href) {
            window.open(href, target);
            return;
        }
        onClick && onClick();
    }

    const buttonClasses = classNames(
        styles.button,
        quicksand.variable,
        libreFranklin.variable,
        customClass,
        {
            [styles.view]: type === "view",
            [styles.outline]: type === "outline",
            [styles.primary]: type === "primary",
            [styles.close]: type === "close",
            [styles.lightBlue]: color === "light-blue" && !isCowActive,
            [styles.cowActive]: isCowActive,
            [styles.darkBlue]: color === "dark-blue",
            [styles.dark]: color === "dark",
            [styles.light]: color === "light",
            [styles.secondary]: type === "secondary",
            [styles.round]: style === "round",
            [styles.shop]: type === "shop" && !isBought,
            [styles.bought]: isBought,
            [styles.nav]: color === "nav",
            [styles.navActive]: color === "nav-active",
            [styles.expense]: type === "expense",
            [styles.home]: type === "home",
            [styles.caption]: size === "caption",
            [styles.cow]: color === "cow",
            [styles.goalMoo]: type === "goalMoo",
            [styles.coins]: type === "coins" || color === "coin-border",
        }
    );

    return (
        <button
            className={buttonClasses}
            value={value}
            onClick={handleClick}
            disabled={isBought}
        >
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