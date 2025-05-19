import styles from "@/app/ui/Buttons/Buttons.module.css";

export default function Slider() {
    return (
        <label className={styles.switch}>
            <input type='checkbox' />
            <span className={styles.slider}></span>
        </label>
    );
}
