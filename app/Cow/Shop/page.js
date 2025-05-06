import classNames from "classnames";
import styles from "@/app/Cow/Shop/styles.module.css";
import ShopItem from "@/app/ui/ShopItem/ShopItem";
import Nav from "@/app/ui/navbar/navbar";
import Coins from "@/app/ui/coins/coins";
export default function page() {
    return (
        <div className={styles.page}>
            <Nav />
            <div className={styles.coins}>
                <Coins
                    value='Coins: '
                    coin={990}
                />
            </div>
            <div className={styles.gridItems}>
                <div className={styles.shopItem}>
                    <ShopItem
                        name='Flower Crown'
                        imageSrc='/flower.svg'
                        value={90}
                    />
                </div>
                <div className={styles.shopItem}>
                    <ShopItem
                        name='Ice Cream Hat'
                        imageSrc='/icecream.svg'
                        value={90}
                    />
                </div>
                <div className={styles.shopItem}>
                    <ShopItem
                        name='Royal Dress'
                        imageSrc='/royaldress.svg'
                        value={90}
                    />
                </div>
                <div className={styles.shopItem}>
                    <ShopItem
                        name='Dapper Suit'
                        imageSrc='/fancysuit.svg'
                        value={250}
                    />
                </div>
                <div className={styles.shopItem}>
                    <ShopItem
                        name='Mini Friend (Cat)'
                        imageSrc='/kitty.svg'
                        value={90}
                    />
                </div>
                <div className={styles.shopItem}>
                    <ShopItem
                        name='Mini Friend (Dog)'
                        imageSrc='/puppy.svg'
                        value={90}
                    />
                </div>
            </div>
        </div>
    );
}
