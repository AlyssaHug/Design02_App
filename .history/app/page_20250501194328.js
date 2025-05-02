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

    const handleSelect = (option) => {
        if (option.value === "add_category") {
            alert("Add category clicked");
        } else {
            alert(`Selected: ${option.label}`);
        }
    };

    return (
        <div>
            <Dropdown
                options={options}
                onSelect={handleSelect}
                placeholder='Select your category'
            />
        </div>
    );
}
