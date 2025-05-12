"use client";

import Nav from "@/app/ui/navbar/navbar";

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
