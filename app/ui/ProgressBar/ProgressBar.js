import classNames from "classnames";
import { Libre_Franklin } from "next/font/google";
import styles from "@/app/ui/ProgressBar/ProgressBar.module.css";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

export default function ProgressBar({ type, style, color, value, name }) {
    const progressClasses = classNames(
        styles.progress,
        libreFranklin.variable,
        {
            [styles.complete]: type === "complete",
            [styles.empty]: type === "empty",
        }
    );
    const progressName = classNames(styles.name, libreFranklin.variable, {
        [styles.name]: style === "name",
    });
    const progressFill = classNames(styles.fill, {
        [styles.ten]: color === "ten",
        [styles.twenty]: color === "twenty",
        [styles.thirty]: color === "thirty",
        [styles.forty]: color === "forty",
        [styles.fifty]: color === "fifty",
        [styles.sixty]: color === "sixty",
        [styles.seventy]: color === "seventy",
        [styles.eighty]: color === "eighty",
        [styles.ninety]: color === "ninety",
    });
    return (
        <div>
            <h3 className={progressName}>{name}</h3>
            <div className={progressFill}></div>
            <div className={progressClasses}>
                <span>{value}</span>
            </div>
        </div>
    );
}
