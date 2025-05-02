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

    const dateOptions = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
        { value: "6", label: "6" },
        { value: "7", label: "7" },
        { value: "8", label: "8" },
        { value: "9", label: "9" },
        { value: "10", label: "10" },
        { value: "11", label: "11" },
        { value: "12", label: "12" },
        { value: "13", label: "13" },
        { value: "14", label: "14" },
        { value: "15", label: "15" },
        { value: "16", label: "16" },
        { value: "17", label: "17" },
        { value: "18", label: "18" },
        { value: "19", label: "19" },
        { value: "20", label: "20" },
        { value: "21", label: "21" },
        { value: "22", label: "22" },
        { value: "23", label: "23" },
        { value: "24", label: "24" },
        { value: "25", label: "25" },
        { value: "26", label: "26" },
        { value: "27", label: "27" },
        { value: "28", label: "28" },
        { value: "29", label: "29" },
        { value: "30", label: "30" },
        { value: "31", label: "31" },
    ];

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

    const handleMonthSelect = (option) => {
        alert(`Selected month: ${option.label}`);
    };
    const handleYearSelect = (option) => {
        alert(`Selected year: ${option.label}`);
    };

    return (
        <div>
            <Dropdown
                options={options}
                onSelect={handleSelect}
                placeholder='Select your category'
            />
            <Dropdown
                options={monthOptions}
                onSelect={handleMonthSelect}
                placeholder='Select month'
                className={styles.month_dropdown}
                buttonClassName={styles.month_dropdown_button}
                contentClassName={styles.month_dropdown_content}
                itemClassName={styles.month_dropdown_item}
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
                className={styles.year_dropdown}
                buttonClassName={styles.year_dropdown_button}
            />
        </div>
    );
}
