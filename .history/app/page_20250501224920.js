"use client";

import CategoryDropdown from "@/app/ui/dropdown/CategoryDropdown";
import MonthDropdown from "@/app/ui/dropdown/MonthDropdown";
import DateDropdown from "@/app/ui/dropdown/DateDropdown";

export default function Page() {
    const handleCategorySelect = (option) => {
        alert(`Selected category: ${option.label}`);
    };

    const handleMonthSelect = (option) => {
        alert(`Selected month: ${option.label}`);
    };

    const handleDateSelect = (option) => {
        alert(`Selected date: ${option.label}`);
    };

    return (
        <div>
            <CategoryDropdown onSelect={handleCategorySelect} />
            <MonthDropdown onSelect={handleMonthSelect} />
            <DateDropdown onSelect={handleDateSelect} />
        </div>
    );
}
