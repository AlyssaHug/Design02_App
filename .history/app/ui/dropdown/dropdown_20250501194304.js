"use client";

import { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import styles from "@/app/ui/dropdown/dropdown";

export default function Dropdown({
    options = [],
    onSelect,
    placeholder = "Select...",
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
    return (
        <div
            className={styles.dropdown}
            ref={dropdownRef}>
            <div
                className={styles.dropdown_button}
                onClick={() => setIsOpen((open) => !open)}
                tabIndex={0}
                role='button'
                aria-haspopup='listbox'
                aria-expanded={isOpen}>
                {selected ? selected.label || selected : placeholder}
            </div>
            {isOpen && (
                <div
                    className={styles.dropdown_content}
                    role='listbox'>
                    {options.map((option, idx) => (
                        <div
                            key={option.value || option}
                            className={styles.dropdown_item}
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
