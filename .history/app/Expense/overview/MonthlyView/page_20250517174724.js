"use client";

import Nav from "@/app/ui/navbar/navbar";
import Monthly from "@/app/ui/Monthly/monthly";
import ToggleButton from "@/app/ui/Buttons/ToggleButton";
import styles from "./monthlyView.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const router = useRouter();
    const [isDates, setIsDates] = useState(true);

    const handleToggle = (isDatesView) => {
        setIsDates(isDatesView);
        if (!isDatesView) {
            router.push("/Expense/overview/Weekly/May");
        }
    };

    return (
        <>
            <div className={styles.toggleButton}>
                <ToggleButton onToggle={handleToggle} />
            </div>
            <Monthly />
            <Nav />
        </>
    );
}
