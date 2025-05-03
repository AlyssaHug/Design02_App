import classNames from "classnames";
import { Quicksand, Libre_Franklin } from "next/font/google";
import Button from "@/app/ui/Buttons/Buttons";
import styles from "@/app/ui/goalscarousel/goalscarousel.module.css";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});
const quicksand = Quicksand({
    variable: "--font-quicksand",
});

export default function Goalscarousel({ style, onClick }) {
    return (
        <div className={styles.goalscarousel}>
            <Button
                value="Bow"
                color="light-blue"
                onClick={onClick}
                customClass={styles.carourselgoals}
            />
             <Button
                value="Sunglasses"
                color="light-blue"
                onClick={onClick}
                customClass={styles.carourselgoals}
            />
             <Button
                value="Dapper"
                color="light-blue"
                onClick={onClick}
                customClass={styles.carourselgoals}
            />
        </div>
    );
}
