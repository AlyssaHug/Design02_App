import styles from "@/app/ui/Buttons/Buttons.module.css";

const ToggleSlider = () => {
    const handleToggle = (event) => {
        console.log("Slider is now:", event.target.checked ? "ON" : "OFF");
        // Add any side effects here (e.g., API calls, updating parent component)
    };

    return (
        <div>
            <label className={styles.switch}>
                <input
                    type='checkbox'
                    id='toggle'
                />
                <span className={styles.slider}></span>
            </label>
        </div>
    );
};

export default ToggleSlider;
