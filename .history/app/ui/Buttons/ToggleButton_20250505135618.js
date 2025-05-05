import { useState } from "react";
import styles from "@/app/ui/Buttons/Buttons.module.css";

const ToggleButton = () => {
    const [isMonthly, setIsMonthly] = useState(true);

    return (
        <div className={styles.toggleContainer}>
            <button
                className={`${styles.monthlyLabel} ${
                    isMonthly ? styles.active : ""
                }`}
                onClick={() => setIsMonthly(true)}
                type='button'>
                Monthly
            </button>
            <button
                className={`${styles.weeklyLabel} ${
                    !isMonthly ? styles.active : ""
                }`}
                onClick={() => setIsMonthly(false)}
                type='button'>
                Weekly
            </button>
        </div>
    );
};

export default ToggleButton;
