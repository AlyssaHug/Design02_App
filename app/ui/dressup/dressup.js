import classNames from "classnames";
import { Quicksand, Libre_Franklin } from "next/font/google";
import Button from "@/app/ui/Buttons/Buttons";
import styles from "@/app/ui/dressup/dressup.module.css";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});
const quicksand = Quicksand({
    variable: "--font-quicksand",
});

export default function Dressup({ style, onClick }) {
    return (
        <div className={styles.dressup}>
            <Button
                imageSrc="/moomoo-dressup/bow.png"
                value="Bow"
                color="light-blue"
                onClick={onClick}
                customClass={styles.dressupButton}
            />
             <Button
                imageSrc="/moomoo-dressup/sunglasses.png"
                value="Sunglasses"
                color="light-blue"
                onClick={onClick}
                customClass={styles.dressupButton}
            />
             <Button
                imageSrc="/moomoo-dressup/moustache.png"
                value="Dapper"
                color="light-blue"
                onClick={onClick}
                customClass={styles.dressupButton}
            />
        </div>
    );
}
