import styles from './pop-ups.module.css';
import { Libre_Franklin } from "next/font/google"; 
import classNames from "classnames";
import { useState } from "react";  

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

const PopUp = ({ element, type, message, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        onClose();
    };

    if (!isVisible) return null;

    const popUpClasses = classNames(styles.popUp, libreFranklin.variable, {
        [styles.popup_background]: element === "background",
        [styles.popup_foreground]: element === "foreground",
        [styles.popup_text]: type === "text",
        [styles.popup_light_button]: element === "light-button",
        [styles.popup_light_button_text]: type === "light-button-text",
        [styles.popup_dark_button]: element === "dark-button",
        [styles.popup_dark_button_text]: type === "dark-button-text",
    });

    return (
        <div className={styles.popup_background}>
            <div className={styles.popup_foreground}>
                <h2 className={styles.popup_text}
                >{message}
                </h2>
                </div>
                    <button
                        onClick={handleClose}
                        className={styles.popup_dark_button}
                    >
                        <h2 className={styles.popup_dark_button_text}>Close</h2>
                    </button>
                    <button 
                        onClick={handleClose}
                        className={styles.popup_light_button}
                    >
                        <span className={styles.popup_light_button_text}>Close</span>
                        <h2 className={styles.popup_light_button_text}>Close</h2>
                    </button>
        </div>
    );
}

export default PopUp;
export { PopUp };