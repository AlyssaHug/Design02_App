import classNames from "classnames";
import { Libre_Franklin } from "next/font/google";
import styles from "@/app/ui/page-headers/page-header.module.css";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

const PageHeader = ({ title, header }) => {
    const headerClasses = classNames(styles.header, libreFranklin.variable, {
        [styles.new_user_homepage_header]: header === "new_user_homepage",
        [styles.your_total_balance]: type === "your_total_balance",
        [styles.balance]: type === "balance",
        [styles.header_title]: type === "header_title",
        [styles.expense_header]: header === "expense_header",
        [styles.goal_homepage_header]: header === "goal_homepage",
        [styles.goal_header]: header === "goal_header",
        [styles.income_history_header]: header === "income_history_header",
        [styles.transactions_this_month_header]: header === "transactions_this_month_header",
        [styles.history_subtitle]: header === "history_subtitle",
    });

    return (
        <div>
            <header className={headerClasses}>
                <h1 className={title}>{title}</h1>
            </header>
        </div>
    );
}

export default PageHeader;
