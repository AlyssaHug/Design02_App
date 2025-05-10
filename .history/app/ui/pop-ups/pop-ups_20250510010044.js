import styles from './pop-ups.module.css';
import { Libre_Franklin } from "next/font/google"; 
import classNames from "classnames";
import { useState } from "react";  

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

const PopUp = ({ type, message, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        onClose();
    };

    if (!isVisible) return null;

    const popUpClasses = classNames(styles.popUp, libreFranklin.variable, {
        [styles.pop-up_background]: type === "background",
        [styles.pop-up_foreground]: type === "foreground",
        [styles.pop-up_text]: type === "text",
        [styles.pop-up_light-button]: type === "light-button",
        [styles.pop-up_light-button-text]: type === "light-button-text",
        [styles.pop-up_dark-button]: type === "dark-button",
        [styles.pop-up_dark-button-text]: type === "dark-button-text",
    });

    return (
        <div className={popUpClasses}>
            <h2>{message}</h2>
            <button onClick={handleClose}>Close</button>
        </div>
    );
}

export default PopUp;
export { PopUp };