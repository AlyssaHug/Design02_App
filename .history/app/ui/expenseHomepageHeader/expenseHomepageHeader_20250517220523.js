import styles from "./expenseHomepageHeader.module.css";
import Button from "@/app/ui/Buttons/Buttons";

export default function ExpenseHomepageHeader({ amount = "$98.36" }) {
    const backToOverview = () => {
        router.replace("/Expense/overview");
    };
    return (
        <>
            <div className={styles.expense_homepage_header}>
                <Button
                    imageSrc='/left_arrow.svg'
                    onClick={backToOverview}
                />
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
