"use client";

import Dropdown from "@/app/ui/dropdown/dropdown";

const dateOptions = Array.from({ length: 31 }, (_, i) => ({
    value: String(i + 1),
    label: String(i + 1),
}));

export default function DateDropdown({ onSelect, className }) {
    return (
        <Dropdown
            options={dateOptions}
            onSelect={onSelect}
            placeholder='Select date'
            className={className}
        />
    );
}
