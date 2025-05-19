import styles from './pop-ups.module.css';
import { Libre_Franklin } from "next/font/google"; 
import classNames from "classnames";
import { useState } from "react";  

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

const PopUp = ({ element, type, message, onClose, description, button1 }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        onClose();
    };

    if (!isVisible) return null;

    const popUpClasses = classNames(styles.popUp, libreFranklin.variable, {
        [styles.popup_text]: type === "text",
        [styles.popup_light_button]: element === "light-button",
        [styles.popup_light_button_center]: element === "light-button-c",
        [styles.popup_light_button_left]: element === "light-button-l",
        [styles.popup_light_button_right]: element === "light-button-r",
        [styles.popup_light_button_text]: type === "light-button-text",
        [styles.popup_dark_button_center]: element === "dark-button-c",
        [styles.popup_dark_button_left]: element === "dark-button-l",
        [styles.popup_dark_button_right]: element === "dark-button-r",
        [styles.popup_dark_button_text]: type === "dark-button-text",
    });

    return (
        <div className={styles.popup_background}>
            <div className={styles.popup_foreground}>
                <h2 className={styles.popup_text}
                >{message}
                </h2>
                    <button
                        onClick={handleClose}
                        className={popUpClasses}
                    >
                        <h2 className={popUpClasses.type}>{description}</h2>
                    </button>
                    <button
                        onClick={handleClose}
                        className={popUpClasses}
                    >
                        <h2 className={popUpClasses.type}>{description}</h2>
                    </button>
                </div>
        </div>
    );
}

export default PopUp;
export { PopUp };