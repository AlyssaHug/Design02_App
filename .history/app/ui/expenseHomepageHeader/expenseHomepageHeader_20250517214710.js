import styles from "./expenseHomepageHeader.module.css";

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
                <button
                    style={{
                        background: "#D6EAF8",
                        border: "none",
                        borderRadius: "8px",
                        padding: "8px 24px",
                        fontFamily: "Quicksand, sans-serif",
                        fontWeight: 500,
                        marginTop: "8px",
                        cursor: "pointer",
                    }}
                    onClick={onAddExpense}>
                    Add Expense
                </button>
            </div>
        </>
    );
}
