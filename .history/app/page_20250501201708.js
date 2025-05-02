"use client";

import Dropdown from "@/app/ui/dropdown/dropdown";
import styles from "@/app/ui/dropdown/dropdown.module.css";

export default function Page() {
    const options = [
        { value: "groceries", label: "Groceries" },
        { value: "dineout", label: "Dine Out" },
        { value: "clothing", label: "Clothing" },
        { value: "games", label: "Games" },
        { value: "online_shopping", label: "Online Shopping" },
        { value: "add_category", label: "Add category +" },
    ];

    const dateOptions = [
        { value: "today", label: "Today" },
        { value: "yesterday", label: "Yesterday" },
        { value: "last_week", label: "Last Week" },
        { value: "last_month", label: "Last Month" },
        { value: "custom", label: "Custom Date" },
    ];

    const handleSelect = (option) => {
        if (option.value === "add_category") {
            alert("Add category clicked");
        } else {
            alert(`Selected: ${option.label}`);
        }
    };

    const handleDateSelect = (option) => {
        alert(`Selected date: ${option.label}`);
    };

    return (
        <div style={{ padding: "20px", display: "flex", gap: "20px" }}>
            <Dropdown
                options={options}
                onSelect={handleSelect}
                placeholder='Select your category'
            />
            <Dropdown
                options={dateOptions}
                onSelect={handleDateSelect}
                placeholder='Select date'
                className={styles.date_dropdown}
                buttonClassName={styles.date_dropdown_button}
                contentClassName={styles.date_dropdown_content}
                itemClassName={styles.date_dropdown_item}
            />
        </div>
    );
}
