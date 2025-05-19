"use client";
import { useState } from "react";
import styles from "@/app/ui/Buttons/Buttons.module.css";

const ToggleButton = ({ onToggle }) => {
    const [isDates, setIsDates] = useState(true);

    const handleToggle = (isDatesView) => {
        setIsDates(isDatesView);
        if (onToggle) {
            onToggle(isDatesView);
        }
    };

    return (
        <div className={styles.toggleContainer}>
            <button
                className={`${styles.monthlyLabel} ${
                    isDates ? styles.active : ""
                }`}
                onClick={() => handleToggle(true)}
                type='button'>
                Dates
            </button>
            <button
                className={`${styles.weeklyLabel} ${
                    !isDates ? styles.active : ""
                }`}
                onClick={() => handleToggle(false)}
                type='button'>
                Transactions
            </button>
        </div>
    );
};

export default ToggleButton;
