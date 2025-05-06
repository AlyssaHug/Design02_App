import classNames from "classnames";
import { Quicksand } from "next/font/google";
import styles from "@/app/ui/Buttons/Buttons.module.css";

const quicksand = Quicksand({
    variable: "--font-quicksand",
});

const ToggleButton = () => {
    return (
        <div className={styles.toggleContainer}>
            <input
                type='checkbox'
                id='toggle'
                className={styles.hiddenCheckbox}
            />
            <label
                htmlFor='toggle'
                className={styles.monthlyLabel}>
                Monthly
            </label>
            <label
                htmlFor='toggle'
                className={styles.weeklyLabel}>
                Weekly
            </label>
        </div>
    );
};

export default ToggleButton;
