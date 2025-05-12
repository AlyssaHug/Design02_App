"use client";

import Nav from "@/app/ui/navbar/navbar";
import { Calendar } from "react-calendar";

export default function Income() {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <Calendar />
            </div>
        </>
    );
}
