"use client";

import Nav from "@/app/ui/navbar/navbar";
import Dropdown from "@/app/ui/dropdown/dropdown";
import Button from "@/app/ui/Buttons/Buttons";
import styles from "./IncomeTransfer.module.css";

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
            <Dropdown options={interactionOptions} />
            <div className={styles.buttonContainer}>
                <Button
                    color='light-blue'
                    value='Cancel'
                    type='expense'
                    style='round'
                    href='/Expense/overview/MonthlyView'
                    size='caption'
                />
                <Button
                    color='light-blue'
                    value='Save and Add'
                    type='expense'
                    style='round'
                    href='/Expense/overview/MonthlyView'
                />
                <Button
                    color='light-blue'
                    value='Add Expense'
                    type='expense'
                    style='round'
                    href='/Expense/overview/MonthlyView'
                />
            </div>
            <Nav />
        </>
    );
}
