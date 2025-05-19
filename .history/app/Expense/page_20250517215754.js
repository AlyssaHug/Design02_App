"use client";

import Nav from "@/app/ui/navbar/navbar";
import Button from "@/app/ui/Buttons/Buttons";
import styles from "./expense.module.css";
import ExpenseHomepageHeader from "@/app/ui/expenseHomepageHeader/expenseHomepageHeader";
export default function Page() {
    return (
        <>
            <ExpenseHomepageHeader />
            <div className={styles.buttonContainer}>
                <div className={styles.buttonOverview}>
                    <Button
                        type='expense'
                        value='Overview'
                        href='/Expense/overview'
                    />
                </div>
                <div className={styles.buttonAddIncome}>
                    <Button
                        type='expense'
                        value='Add Income Transfer'
                        href='/Expense/AddIncomeTransfer'
                    />
                </div>
                <div className={styles.buttonAddExpenses}>
                    <Button
                        type='expense'
                        value='Add Expenses'
                        href='/Expense/AddExpenses'
                    />
                </div>
                <div className={styles.buttonViewExpenses}>
                    <Button
                        type='expense'
                        value='View Expenses'
                        href='/Expense/overview/MonthlyView'
                    />
                </div>
            </div>
            <Nav />
        </>
    );
}
