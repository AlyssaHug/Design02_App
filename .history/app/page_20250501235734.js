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

    const yearOptions = [
        { value: "2025", label: "2025" },
        { value: "2026", label: "2026" },
        { value: "2027", label: "2027" },
        { value: "2028", label: "2028" },
        { value: "2029", label: "2029" },
        { value: "2030", label: "2030" },
        { value: "2031", label: "2031" },
        { value: "2032", label: "2032" },
        { value: "2033", label: "2033" },
        { value: "2034", label: "2034" },
        { value: "2035", label: "2035" },
    ];

    const depositFrequencyOptions = [
        { value: "daily", label: "Daily" },
        { value: "weekly", label: "Weekly" },
        { value: "bi-weekly", label: "Bi-weekly" },
        { value: "monthly", label: "Monthly" },
    ];

    const goalTypeOptions = [
        { value: "vacation", label: "Vacation" },
        { value: "concert", label: "Concert" },
        { value: "Digital", label: "Digital" },
        { value: "Big Purchase", label: "Big Purchase" },
        { value: "Saving", label: "Saving" },
    ];

    const interactionOptions = [
        { value: "e-transfer", label: "E-Transfer" },
        { value: "cash", label: "Cash" },
        { value: "cheque", label: "Cheque" },
        { value: "credit card", label: "Credit Card" },
        { value: "paypal", label: "Paypal" },
        { value: "other", label: "Other" },
    ];

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

    const handleYearSelect = (option) => {
        // Handle year selection
    };

    const handleDepositFrequencySelect = (option) => {
        // Handle deposit frequency selection
    };

    const handleGoalTypeSelect = (option) => {
        // Handle goal type selection
    };

    const handleInteractionSelect = (option) => {
        if (option.value === "other") {
            console.log("Other interaction selected");
        }
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
            <Dropdown
                options={yearOptions}
                onSelect={handleYearSelect}
                placeholder='Select year'
            />
            <Dropdown
                options={depositFrequencyOptions}
                onSelect={handleDepositFrequencySelect}
                placeholder='Select deposit frequency'
            />
            <Dropdown
                options={goalTypeOptions}
                onSelect={handleGoalTypeSelect}
                placeholder='Select goal type'
            />
            <Dropdown
                options={interactionOptions}
                onSelect={handleInteractionSelect}
                placeholder='Select interaction'
            />
        </div>
    );
}
