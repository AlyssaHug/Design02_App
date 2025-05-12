import styles from './pop-ups.module.css';
import { Libre_Franklin } from "next/font/google"; 
import classNames from "classnames";
import { useState } from "react";  

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

const PopUp = ({ type, title, message, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        onClose();
    };

    if (!isVisible) return null;

    const popUpClasses = classNames(styles.popUp, libreFranklin.variable, {
        [styles.success]: type === "success",
        [styles.error]: type === "error",
        [styles.warning]: type === "warning",
        [styles.info]: type === "info",
    });

    return (
        <div className={popUpClasses}>
            <h2>{title}</h2>
            <p>{message}</p>
            <button onClick={handleClose}>Close</button>
        </div>
    );
}

export default PopUp;
export { PopUp };