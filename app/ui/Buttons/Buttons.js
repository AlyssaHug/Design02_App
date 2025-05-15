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
    href,
    target = "_self",
    className,
    customClass, // Add customClass to props
}) {
    console.log("Button rendered: ", { value, isBought, type, alt, imageSrc });
    function handleClick() {
        if (href) {
            window.open(href, target);
            return;
        }
        onClick();
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
            [styles.shop]: type === "shop" && !isBought,
            [styles.bought]: isBought,
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
            [styles.settings]: type === "settings",
        }
    );

    return (
        <button
            className={buttonClasses}
            value={value}
            onClick={handleClick}
            disabled={isBought}>
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
export function SettingButton({
    type,
    value,
    imageSrc,
    alt,
    href,
    target = "_self",
}) {
    function handleClick() {
        if (href) {
            window.open(href, target);
            return;
        }
        onClick();
    }
    const settingButtonClasses = classNames(
        styles.settingButton,
        quicksand.variable,
        libreFranklin.variable,
        {
            [styles.settings]: type === "settings",
        }
    );
    return (
        <button
            className={settingButtonClasses}
            value={value}
            onClick={handleClick}>
            <p>{value}</p>
            {imageSrc && (
                <img
                    src={imageSrc}
                    alt={alt}
                />
            )}
        </button>
    );
}
