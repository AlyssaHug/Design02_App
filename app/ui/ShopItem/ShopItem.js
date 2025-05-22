import classNames from "classnames";
import styles from "@/app/ui/ShopItem/ShopItem.module.css";
import Button from "../Buttons/Buttons";
import Moomoo from "../moomoo/moomoo";
import { Quicksand, Libre_Franklin } from "next/font/google";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
    subsets: ["latin"],
    display: "swap",
});
const quicksand = Quicksand({
    variable: "--font-quicksand",
    subsets: ["latin"],
    display: "swap",
});

export default function ShopItem({
    type,
    onClick,
    name,
    value,
    imageSrc,
    isBought,
}) {
    const ItemClasses = classNames(styles.Item, libreFranklin.variable);
    {
        return (
            <div className={styles.container}>
                <h3 className={styles.itemName}>{name}</h3>
                <Moomoo
                    size='shop'
                    src={imageSrc}
                />
                <Button
                    className={classNames(styles.button, {
                        [styles.isBought]: isBought,
                    })}
                    type='shop'
                    value={isBought ? "Already Owned" : `Buy: ${value} coins`}
                    onClick={onClick}
                    isBought={isBought}
                />
            </div>
        );
    }
}
