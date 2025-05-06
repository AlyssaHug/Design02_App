import styles from "@/app/Rewards/styles.module.css";
import RewardClaim from "../ui/Reward/Reward";
export default function page() {
    return (
        <div className={styles.container}>
            <RewardClaim
                coin='05'
                value='Daily Sign-in'
            />
        </div>
    );
}
