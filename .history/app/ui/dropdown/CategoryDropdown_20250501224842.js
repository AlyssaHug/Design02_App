"use client";

import Dropdown from "./dropdown";

const options = [
    { value: "groceries", label: "Groceries" },
    { value: "dineout", label: "Dine Out" },
    { value: "clothing", label: "Clothing" },
    { value: "games", label: "Games" },
    { value: "online_shopping", label: "Online Shopping" },
    { value: "add_category", label: "Add category +" },
];

export default function CategoryDropdown({ onSelect, className }) {
    const handleSelect = (option) => {
        if (option.value === "add_category") {
            alert("Add category clicked");
        } else if (onSelect) {
            onSelect(option);
        }
    };

    return (
        <Dropdown
            options={options}
            onSelect={handleSelect}
            placeholder='Select your category'
            className={className}
        />
    );
}
