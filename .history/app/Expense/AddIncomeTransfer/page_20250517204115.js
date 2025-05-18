"use client";

import Nav from "@/app/ui/navbar/navbar";
import Dropdown from "@/app/ui/dropdown/dropdown";
import Button from "@/app/ui/Buttons/Buttons";
import styles from "./IncomeTransfer.module.css";
import TextField from "@/app/ui/TextField/TextField";

export default function Page() {
    const interactionOptions = [
        { value: "e-transfer", label: "E-Transfer" },
        { value: "cash", label: "Cash" },
        { value: "cheque", label: "Cheque" },
        { value: "paypal", label: "Paypal" },
        { value: "other", label: "Other" },
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
                <Dropdown options={interactionOptions} />
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
                    href='/overview/'
                />
                <Button
                    color='light-blue'
                    value='Save and Add'
                    style='round'
                    href='/Expense/AddIncomeTransfer'
                />
                <Button
                    color='light-blue'
                    value='Add Income'
                    style='round'
                    href='/Expense/Income/May'
                />
            </div>
            <Nav />
        </>
    );
}
