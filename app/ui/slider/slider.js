import classNames from "classnames";
import { Quicksand, Libre_Franklin } from "next/font/google";
import Button from "@/app/ui/Buttons/Buttons";
import styles from "@/app/ui/slider/slider.module.css";
import { useRef, useEffect } from "react";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});
const quicksand = Quicksand({
    variable: "--font-quicksand",
});

export default function Slider({ style, onClick }) {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let isDown = false;
        let startX;
        let scrollLeft;

        const startDragging = (e) => {
            isDown = true;
            slider.classList.add(styles.active);
            startX = e.pageX || e.touches[0].pageX;
            scrollLeft = slider.scrollLeft;
        };

        const stopDragging = () => {
            isDown = false;
            slider.classList.remove(styles.active);
        };

        const drag = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX || e.touches[0].pageX;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        };

        slider.addEventListener("mousedown", startDragging);
        slider.addEventListener("touchstart", startDragging);
        slider.addEventListener("mousemove", drag);
        slider.addEventListener("touchmove", drag);
        slider.addEventListener("mouseup", stopDragging);
        slider.addEventListener("touchend", stopDragging);
        slider.addEventListener("mouseleave", stopDragging);

        return () => {
            slider.removeEventListener("mousedown", startDragging);
            slider.removeEventListener("touchstart", startDragging);
            slider.removeEventListener("mousemove", drag);
            slider.removeEventListener("touchmove", drag);
            slider.removeEventListener("mouseup", stopDragging);
            slider.removeEventListener("touchend", stopDragging);
            slider.removeEventListener("mouseleave", stopDragging);
        };
    }, []);

    return (
        <div className={styles.sliderWrapper}>
            <div className={styles.slider} ref={sliderRef}>
                <Button
                    value="Play"
                    color="light-blue"
                    onClick={onClick}
                    customClass={styles.lightBlueOverride}
                />
                <Button
                    value="Pet"
                    color="light-blue"
                    onClick={onClick}
                    customClass={styles.lightBlueOverride}
                />
                <Button
                    value="Feed"
                    color="light-blue"
                    onClick={onClick}
                    customClass={styles.lightBlueOverride}
                />
                <Button
                    value="Custom"
                    color="light-blue"
                    onClick={onClick}
                    customClass={styles.lightBlueOverride}
                />
                <Button
                    value="Shop"
                    color="light-blue"
                    onClick={onClick}
                    customClass={styles.lightBlueOverride}
                />
            </div>
        </div>
    );
}