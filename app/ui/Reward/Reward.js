import Button from "../Buttons/Buttons";
import classNames from "classnames";
import styles from "@/app/ui/Reward/Reward.module.css";

export default function RewardClaim({ value, coin, redeem, color, type }) {
    return (
        <div className={styles.container}>
            <h3 className={styles.name}>{value}</h3>
            <p className={styles.coin}>{coin} coins</p>
            <Button
                className={styles.button}
                color={color}
                type={type}
                value={redeem}
            />
        </div>
    );
}
