"use client";

import Dropdown from "@/app/ui/dropdown/dropdown";

export default function Page() {
    const categoryOptions = [
        { value: "groceries", label: "Groceries" },
        { value: "dineout", label: "Dine Out" },
        { value: "clothing", label: "Clothing" },
        { value: "games", label: "Games" },
        { value: "online_shopping", label: "Online Shopping" },
        { value: "add_category", label: "Add category +" },
    ];

    const monthOptions = [
        { value: "1", label: "January" },
        { value: "2", label: "February" },
        { value: "3", label: "March" },
        { value: "4", label: "April" },
        { value: "5", label: "May" },
        { value: "6", label: "June" },
        { value: "7", label: "July" },
        { value: "8", label: "August" },
        { value: "9", label: "September" },
        { value: "10", label: "October" },
        { value: "11", label: "November" },
        { value: "12", label: "December" },
    ];

    const dateOptions = Array.from({ length: 31 }, (_, i) => ({
        value: String(i + 1),
        label: String(i + 1),
    }));

    const handleCategorySelect = (option) => {
        if (option.value === "add_category") {
            console.log("Add category clicked");
        }
    };

    const handleMonthSelect = (option) => {
        // Handle month selection
    };

    const handleDateSelect = (option) => {
        // Handle date selection
    };

    return (
        <div>
            <Dropdown
                options={categoryOptions}
                onSelect={handleCategorySelect}
                placeholder='Select your category'
            />
            <Dropdown
                options={monthOptions}
                onSelect={handleMonthSelect}
                placeholder='Select month'
            />
            <Dropdown
                options={dateOptions}
                onSelect={handleDateSelect}
                placeholder='Select date'
            />
        </div>
    );
}
