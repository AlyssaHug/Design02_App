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
            // Navigate back to Weekly view when Transactions is selected
            router.push("/Expense/overview/Weekly/May"); // or whatever month you want to default to
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
