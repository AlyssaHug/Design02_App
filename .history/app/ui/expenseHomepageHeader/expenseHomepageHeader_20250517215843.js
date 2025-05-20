import styles from "./expenseHomepageHeader.module.css";
import Button from "@/app/ui/Buttons/Buttons";

export default function ExpenseHomepageHeader({
    amount = "$1244.44",
    onAddExpense,
}) {
    return (
        <>
            <div className={styles.expense_homepage_header}>
                <h1>Expenses</h1>
                <div className={styles.spentLabel}>You've Spent</div>
                <div className={styles.amountBox}>
                    <span className={styles.amount}>{amount}</span>
                </div>
                <div className={styles.monthText}>this month!</div>
                <Button
                    type='expense'
                    value='Add Expense'
                    href='/Expense/AddExpenses'
                />
            </div>
        </>
    );
}
