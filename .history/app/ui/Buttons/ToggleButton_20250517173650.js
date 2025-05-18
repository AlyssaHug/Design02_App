"use client";
import { useState } from "react";
import styles from "@/app/ui/Buttons/Buttons.module.css";

const ToggleButton = ({ onToggle }) => {
    const [isMonthly, setIsMonthly] = useState(true);

    const handleToggle = (isMonthlyView) => {
        setIsMonthly(isMonthlyView);
        if (onToggle) {
            onToggle(isMonthlyView);
        }
    };

    return (
        <div className={styles.toggleContainer}>
            <button
                className={`${styles.monthlyLabel} ${
                    isMonthly ? styles.active : ""
                }`}
                onClick={() => handleToggle(true)}
                type='button'>
                Dates
            </button>
            <button
                className={`${styles.weeklyLabel} ${
                    !isMonthly ? styles.active : ""
                }`}
                onClick={() => handleToggle(false)}
                type='button'>
                Transactions
            </button>
        </div>
    );
};

export default ToggleButton;
