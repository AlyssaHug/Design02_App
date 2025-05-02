"use client";

import { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import styles from "@/app/ui/dropdown/dropdown.module.css";

export default function Dropdown({
    options = [],
    onSelect,
    placeholder = "Select...",
    className,
    buttonClassName,
    contentClassName,
    itemClassName,
    variant = "default",
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
        if (onSelect) onSelect(option);
    };

    const dropdownClasses = classNames(styles.dropdown, className, {
        [styles.category]: variant === "category",
        [styles.date]: variant === "date",
        [styles.month]: variant === "month",
        [styles.year]: variant === "year",
    });

    const buttonClasses = classNames(styles.dropdown_button, buttonClassName, {
        [styles.category_button]: variant === "category",
        [styles.date_button]: variant === "date",
        [styles.month_button]: variant === "month",
        [styles.year_button]: variant === "year",
    });

    const contentClasses = classNames(
        styles.dropdown_content,
        contentClassName,
        {
            [styles.category_content]: variant === "category",
            [styles.date_content]: variant === "date",
            [styles.month_content]: variant === "month",
            [styles.year_content]: variant === "year",
        }
    );

    const itemClasses = classNames(styles.dropdown_item, itemClassName, {
        [styles.category_item]: variant === "category",
        [styles.date_item]: variant === "date",
        [styles.month_item]: variant === "month",
        [styles.year_item]: variant === "year",
    });

    return (
        <div
            className={dropdownClasses}
            ref={dropdownRef}>
            <div
                className={buttonClasses}
                onClick={() => setIsOpen((open) => !open)}
                tabIndex={0}
                role='button'
                aria-haspopup='listbox'
                aria-expanded={isOpen}>
                {selected ? selected.label || selected : placeholder}
            </div>
            {isOpen && (
                <div
                    className={contentClasses}
                    role='listbox'>
                    {options.map((option, idx) => (
                        <div
                            key={option.value || option}
                            className={itemClasses}
                            onClick={() => handleSelect(option)}
                            role='option'
                            aria-selected={selected === option}>
                            {option.label || option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
