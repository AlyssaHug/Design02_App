"use client";

import Nav from "@/app/ui/navbar/navbar";
import Dropdown from "@/app/ui/dropdown/dropdown";
import Button from "@/app/ui/Buttons/Buttons";
import styles from "./AddExpenses.module.css";
import TextField from "@/app/ui/TextField/TextField";
import PageHeader from "@/app/ui/page-headers/page-header";

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
            <div className={styles.addExpensesContainer}>
                <div className={styles.questionInputs}>
                    <p>What expense would you like to add today?</p>
                </div>
                <TextField
                    type='text'
                    size='round'
                    placeholder='Eg. Starbucks Coffee (Matcha Latte)'
                />
            </div>
            <div className={styles.dropdownContainer}>
                <div className={styles.dropdownInputs}>
                    <p>What category would you like to add this to?</p>
                </div>
                <Dropdown options={categoryOptions} />
            </div>
            <div className={styles.expensesAmountContainer}>
                <div className={styles.amountInputs}>
                    <p>Expense Amount:</p>
                </div>
                <TextField
                    type='number'
                    size='round'
                    placeholder='Eg. 10.00'
                />
            </div>
            <div className={styles.commentsContainer}>
                <div className={styles.commentsInputs}>
                    <p>Additional Comments:</p>
                </div>
                <TextField
                    type='text'
                    size='round'
                    placeholder='Bought drink for my friend'
                />
            </div>
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
