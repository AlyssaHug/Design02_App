import classNames from "classnames";
import styles from "@/app/ui/ShopItem/ShopItem.module.css";
import Button from "../Buttons/Buttons";
import Moomoo from "../moomoo/moomoo";
import { Quicksand, Libre_Franklin } from "next/font/google";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});
const quicksand = Quicksand({
    variable: "--font-quicksand",
});

export default function ShopItem({ type, onClick, name, value, imageSrc }) {
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
                    className={styles.button}
                    type='shop'
                    value={`Buy: ${value} coins`}
                    onClick={onClick}
                />
            </div>
        );
    }
}
