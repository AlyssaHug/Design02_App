"use client";

import Nav from "@/app/ui/navbar/navbar";
import Monthly from "@/app/ui/Monthly/monthly";
import ToggleButton from "@/app/ui/Buttons/ToggleButton";
import styles from "./monthlyView.module.css";

export default function Page() {
    return (
        <>
            <div className={styles.toggleButton}>
                <ToggleButton />
            </div>
            <Monthly />
            <Nav />
        </>
    );
}
