import classNames from "classnames";
import styles from "@/app/ui/navbar/navbar.module.css";
import { Libre_Franklin } from "next/font/google";

import Nav from "@/app/ui/Buttons/Buttons";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

const quicksand = Quicksand({
    variable: "--font-quicksand",
});



export default function Nav({ value, type, imageSrc, size }) {
    const navClasses = classNames(
        styles.nav,
        quicksand.variable,
        libreFranklin.variable,
        {
            [styles.nav]: type === "nav",
            [styles[size]]: size,
            [styles.size]: type === "goals",
            [styles.size]: type === "expense",
        }
    );
    return (
        <div className={navClasses}>
            {value && <p>{value}</p>}
            {imageSrc && <img src={imageSrc} size={goals} />}
        </div>
    );
}
