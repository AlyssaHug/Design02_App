"use client";

import Nav from "@/app/ui/navbar/navbar";
import Dropdown from "@/app/ui/dropdown/dropdown";
import Button from "@/app/ui/Buttons/Buttons";
import styles from "./AddExpenses.module.css";

export default function Page() {
    const categoryOptions = [
        { value: "groceries", label: "Groceries" },
        { value: "dineout", label: "Dine Out" },
        { value: "clothing", label: "Clothing" },
        { value: "games", label: "Games" },
        { value: "online_shopping", label: "Online Shopping" },
    ];
    return (
        <>
            <Dropdown options={categoryOptions} />
            <div className={styles.buttonContainer}>
                <Button
                    color='light-blue'
                    value='Cancel'
                    style='round'
                    size='caption'
                    href='/Expense/'
                />
                <Button
                    color='light-blue'
                    value='Save and Add'
                    style='round'
                    href='/Expense/'
                />
                <Button
                    color='light-blue'
                    value='Add Expense'
                    style='round'
                    href='/Expense/'
                />
            </div>
            <Nav />
        </>
    );
}
