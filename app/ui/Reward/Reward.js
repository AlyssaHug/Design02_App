import Button from "../Buttons/Buttons";
import classNames from "classnames";
import styles from "@/app/ui/Reward/Reward.module.css";

export default function RewardClaim({ value, coin }) {
    return (
        <div className={styles.container}>
            <h3 className={styles.name}>{value}</h3>
            <p className={styles.coin}>{coin} coins</p>
            <Button
                className={styles.button}
                color='light'
                value='Redeem'
            />
        </div>
    );
}
