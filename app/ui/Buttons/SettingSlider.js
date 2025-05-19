"use client"; // Add this if using Next.js 13+ with App Router for client-side logic

import { useState, useRef, useEffect } from "react";
import styles from "@/app/ui/Buttons/Buttons.module.css";

export default function SettingSlider({
    min = 0,
    max = 100,
    initialValue = 50,
    onChange,
}) {
    const [value, setValue] = useState(initialValue);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);
    const handleRef = useRef(null);

    // Calculate percentage for styling
    const percentage = ((value - min) / (max - min)) * 100;

    // Handle drag start
    const handleMouseDown = (e) => {
        setIsDragging(true);
    };

    // Handle drag movement
    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const sliderRect = sliderRef.current.getBoundingClientRect();
        let newValue =
            ((e.clientX - sliderRect.left) / sliderRect.width) * (max - min) +
            min;

        // Clamp value within min and max
        newValue = Math.max(min, Math.min(max, newValue));
        setValue(Math.round(newValue));

        if (onChange) onChange(Math.round(newValue));
    };

    // Handle drag end
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Add event listeners for dragging
    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div
            className={styles.sliderContainer}
            ref={sliderRef}>
            <div className={styles.track}>
                <div
                    className={styles.filledTrack}
                    style={{ width: `${percentage}%` }}
                />
                <div
                    className={styles.handle}
                    ref={handleRef}
                    onMouseDown={handleMouseDown}
                    style={{ left: `${percentage}%` }}
                />
            </div>
        </div>
    );
}
