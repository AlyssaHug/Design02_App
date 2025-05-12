"use client";
import Moomoo from "@/app/ui/moomoo/moomoo";
import Coins from "@/app/ui/coins/coins";
import styles from "@/app/Cow/Customize/styles.module.css";
import Button from "@/app/ui/Buttons/Buttons";
import Nav from "@/app/ui/navbar/navbar";
import Dressup from "@/app/ui/dressup/dressup";

export default function Dressmoo() {
    return (
        <div className={styles.container}>
            <Nav />
            <div className={styles.sameRow}>
                <Button
                    imageSrc="/left_arrow.svg"

                />
                <h1 className={styles.header}>Customize</h1>
                <div className={styles.coins}>
                    <Coins
                        value='Coins: '
                        coin={990}
                    />
                </div>
            </div>
            <div className={styles.cowContainer}>
                <div className={styles.cowback}></div>
                <div className={styles.mooplace}>
                    <Moomoo
                        size='dressup'
                        src='/moomoonormal.svg'
                        className={styles.moomooSvg}
                    />
                </div>
            </div>
            <div className={styles.removebutton}>
                <Button
                    color='light-blue'
                    value='Remove'
                />
            </div>
            <div className={styles.buyanditems}>
                <h1 className={styles.items}>Items</h1>
                <div className={styles.shop}>
                    <Button
                        type='shop'
                        value='Buy More'
                    />
                </div>
            </div>
            <div>
                <Dressup />
            </div>
        </div>
    );
}
