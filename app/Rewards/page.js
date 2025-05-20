import styles from "@/app/Rewards/styles.module.css";
import RewardClaim from "../ui/Reward/Reward";
import Nav from "../ui/navbar/navbar";
import PageHeader from "../ui/page-headers/page-header";
export default function page() {
    return (
        <div className={styles.container}>
            <Nav />
            <div className={styles.header}>
                <PageHeader
                    header='goal_header'
                    text="Here's your Rewards!"
                    type='header_title'
                />
            </div>
            <div className={styles.claim}>
                <h1 className={styles.subheader}>Claimable Rewards</h1>
                <RewardClaim
                    color='light'
                    coin='05'
                    value='Daily Sign-in'
                    redeem='Redeem'
                />
                <RewardClaim
                    color='light'
                    coin='10'
                    value='Check on MooMoo'
                    redeem='Redeem'
                />
            </div>
            <div className={styles.new}>
                <h1 className={styles.subheader}>New Rewards</h1>
                <RewardClaim
                    coin='90'
                    type='secondary'
                    value='Reduce spending by $60!'
                    redeem='Complet goal first'
                />
                <RewardClaim
                    type='secondary'
                    coin='50'
                    value='Spend $50 less on games!'
                    redeem='Complete goal first'
                />
            </div>
        </div>
    );
}
