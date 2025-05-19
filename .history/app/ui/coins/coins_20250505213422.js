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

export default function Coins({ style }) {
    return (
        <div>
            <Button
                type='coins'
                value='Coins: '
                coin={90}
                customClass={styles.coinborder}
            />
        </div>
    );
}
