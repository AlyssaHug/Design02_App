import classNames from "classnames";
import { Quicksand, Libre_Franklin } from "next/font/google";
import Button from "@/app/ui/Buttons/Buttons";
import styles from "@/app/ui/slider/slider.module.css";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});
const quicksand = Quicksand({
    variable: "--font-quicksand",
});

export default function Slider({ style, onClick, isClicked }) {
    return (
        <div className={styles.slider}>
            <Button
                value='Play'
                color='light-blue'
                onClick={onClick}
                customClass={styles.lightBlueOverride}
                isClicked={isClicked}
                className={classNames(styles.button, {
                    [styles.isClicked]: isClicked,
                })}
            />
            <Button
                value='Pet'
                color='light-blue'
                onClick={onClick}
                customClass={styles.lightBlueOverride}
                isClicked={isClicked}
                className={classNames(styles.button, {
                    [styles.isClicked]: isClicked,
                })}
            />
            <Button
                value='Feed'
                color='light-blue'
                onClick={onClick}
                customClass={styles.lightBlueOverride}
                isClicked={isClicked}
                className={classNames(styles.button, {
                    [styles.isClicked]: isClicked,
                })}
            />
            <Button
                value='Customize'
                color='light-blue'
                onClick={onClick}
                customClass={styles.lightBlueOverride}
                href='/Cow/Customize'
                isClicked={isClicked}
                className={classNames(styles.button, {
                    [styles.isClicked]: isClicked,
                })}
            />
            <Button
                value='Shop'
                color='light-blue'
                onClick={onClick}
                customClass={styles.lightBlueOverride}
                href='/Cow/Shop'
                isClicked={isClicked}
                className={classNames(styles.button, {
                    [styles.isClicked]: isClicked,
                })}
            />
        </div>
    );
}
