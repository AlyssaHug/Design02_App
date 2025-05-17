import classNames from "classnames";
import { Libre_Franklin } from "next/font/google";
import styles from "@/app/ui/ProgressBar/ProgressBar.module.css";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

const ProgressBar = ({
    progress,
    goal,
    value,

    textColor = "#fefdfd",
}) => {
    const percentage = (progress / goal) * 100;

    return (
        <div className={styles.container}>
            <h3 className={styles.goalText}>{value}</h3>
            <div className={styles.progressBar}>
                <div
                    className={styles.progressFill}
                    style={{ width: `${percentage}%` }}></div>
            </div>
            <span
                className={styles.progressText}
                style={{ color: textColor }}>
                {progress}/{goal}
            </span>
        </div>
    );
};

export default ProgressBar;
