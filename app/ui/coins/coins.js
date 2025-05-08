import classNames from "classnames";
import { Quicksand, Libre_Franklin } from "next/font/google";
import styles from "@/app/ui/coins/coins.module.css";
import Button from "@/app/ui/Buttons/Buttons";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

const quicksand = Quicksand({
    variable: "--font-quicksand",
});

export default function Coins({ type, value, coin, customClass }) {
    return (
        <div className={styles.coinborder}>
            {`${value}${coin}`}{" "}
            {/* Combine value and coin into a single string */}
        </div>
    );
}
