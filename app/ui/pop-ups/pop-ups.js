import styles from "./pop-ups.module.css";
import { Libre_Franklin } from "next/font/google";
import classNames from "classnames";
import { useState } from "react";
import { useRouter } from "next/navigation";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
    subsets: ["latin"],
    display: "swap",
});

const PopUp = ({ buttons, message, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);
    const router = useRouter();

    const handleClose = (handler, navigateTo) => {
        setIsVisible(false);
        if (handler) handler();
        if (onClose) onClose();
        if (navigateTo) router.push(navigateTo);
    };

    if (!isVisible) return null;

    return (
        <div className={styles.popup_background}>
            <div className={styles.popup_foreground}>
                <h2 className={styles.popup_text}>{message}</h2>
                <div className={styles.popup_buttons}>
                    {buttons.map((btn, idx) => {
                        const btnClasses = classNames(
                            libreFranklin.variable,
                            styles[btn.className],
                            styles[btn.textClassName]
                        );
                        return (
                            <button
                                key={idx}
                                onClick={() =>
                                    handleClose(btn.onClick, btn.navigateTo)
                                }
                                className={btnClasses}
                                type={btn.type || "button"}>
                                {btn.label}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PopUp;
export { PopUp };
