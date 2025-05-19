"use client";
import Button from "./Buttons";
import styles from "./Buttons.module.css";

export default function PageButton({ imageSrc, onClick, direction }) {
    return (
        <Button
            imageSrc={imageSrc}
            onClick={onClick}
            type='nav'
            alt={`${direction} page`}
            customClass={styles.pageButton}
        />
    );
}
