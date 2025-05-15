import styles from './pop-ups.module.css';
import { Libre_Franklin } from "next/font/google"; 
import classNames from "classnames";
import { useState } from "react";  

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

const PopUp = ({ buttons, message, onClose}) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = (handler) => {
        setIsVisible(false);
        if (handler) handler();
        if (onClose) onClose();
    };

    if (!isVisible) return null;

    return (
        <div className={styles.popup_background}>
            <div className={styles.popup_foreground}>
                <h2 className={styles.popup_text}>{message}</h2>
                <div>
                    {buttons.map((btn, idx) => {
                        const btnClasses = classNames(
                            libreFranklin.variable,
                            styles[btn.className],
                            styles[btn.textClassName] 
                        );
                        return (
                        <div className={styles.popup_buttons}>
                            {buttons.map((btn, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleClose(btn.onClick)}
                                className={btnClasses}
                                type={btn.type || "button"}
                            >
                                {btn.label}
                            </button>
                            ))}
                        </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};



export default PopUp;
export { PopUp };