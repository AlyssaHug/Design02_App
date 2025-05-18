import styles from "./pop-ups.module.css";
import { Libre_Franklin } from "next/font/google";
import classNames from "classnames";
import { useState } from "react";
import { useRouter } from "next/navigation";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

/**
 * PopUp component displays a modal with a message and one or more action buttons.
 * @param {Array} buttons - Array of button objects to render in the popup.
 * @param {string} message - The message to display in the popup.
 * @param {function} onClose - Callback to run when the popup is closed.
 */
const PopUp = ({ buttons = [], message, onClose }) => {
    // State to control visibility of the popup
    const [isVisible, setIsVisible] = useState(true);
    // Next.js router for navigation
    const router = useRouter();

    /**
     * Handles closing the popup, running any button-specific handler, the onClose callback, and navigation if specified.
     * @param {function} handler - Optional function to run on button click.
     * @param {string} navigateTo - Optional route to navigate to after closing.
     */
    const handleClose = (handler, navigateTo) => {
        setIsVisible(false); // Hide the popup
        if (handler) handler(); // Run button-specific handler if provided
        if (onClose) onClose(); // Run the onClose callback
        if (navigateTo) router.push(navigateTo); // Navigate if a route is specified
    };

    // If not visible, render nothing
    if (!isVisible) return null;

    return (
        <div className={styles.popup_background}>
            <div className={styles.popup_foreground}>
                {/* Popup message */}
                <h2 className={styles.popup_text}>{message}</h2>
                {/* Render all buttons passed in the buttons prop */}
                <div className={styles.popup_buttons}>
                    {buttons.map((btn, idx) => {
                        // Combine font and style classes for each button
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
