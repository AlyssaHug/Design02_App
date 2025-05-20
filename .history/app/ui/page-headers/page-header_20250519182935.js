import classNames from "classnames";
import { Libre_Franklin } from "next/font/google";
import styles from "@/app/ui/page-headers/page-header.module.css";
import Button from "@/app/ui/Buttons/Buttons";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

const PageHeader = ({ type, header, text, showBackButton = false, showBalance = false, balance, onBack }) => {
    const headerClasses = classNames(styles.header, libreFranklin.variable, {
        [styles.new_user_homepage_header]: header === "new_user_homepage",
        [styles.homepage_header]: header === "homepage_header",
        [styles.your_total_balance]: type === "your_total_balance",
        [styles.balance]: type === "balance",
        [styles.header_title]: type === "header_title",
        [styles.expense_homepage_header]: header === "expense_homepage",
        [styles.add_expense_header]: header === "add_expense_header",
        [styles.add_expense_header_text]: header === "add_expense_header_text",
        [styles.expense_overview_header]: header === "expense_overview_header",
        [styles.income_transfer_header]: header === "income_transfer_header",
        [styles.income_transfer_text]: header === "income_transfer_text",
        [styles.goal_homepage_header]: header === "goal_homepage",
        [styles.goal_header]: header === "goal_header",
        [styles.income_history_header]: header === "income_history_header",
        [styles.transactions_this_month_header]: header === "transactions_this_month_header",
        [styles.history_subtitle]: header === "history_subtitle",
    });

    return (
        <div>
            <header className={headerClasses}>
                {showBackButton && (
                    <button
                        className={styles.back_button}
                        onClick={onBack}
                        aria-label="Back"
                        type="button"
                        style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="32" viewBox="0 0 16 32" fill="none">
                            <path d="M13.7295 31.7977C14.2591 31.7987 14.7723 31.6143 15.1801 31.2764C15.4096 31.0861 15.5993 30.8524 15.7383 30.5887C15.8774 30.325 15.9631 30.0365 15.9904 29.7396C16.0178 29.4428 15.9863 29.1434 15.8978 28.8587C15.8093 28.574 15.6656 28.3096 15.4747 28.0806L5.32065 15.932L15.1121 3.76071C15.3003 3.52887 15.4409 3.26211 15.5258 2.97576C15.6106 2.68941 15.638 2.38911 15.6064 2.09213C15.5748 1.79515 15.4849 1.50734 15.3417 1.24525C15.1985 0.983157 15.0049 0.751944 14.7721 0.564904C14.5376 0.358567 14.2629 0.20293 13.9654 0.107761C13.6679 0.0125912 13.354 -0.0200553 13.0432 0.0118686C12.7325 0.0437924 12.4317 0.139598 12.1598 0.293273C11.8878 0.446948 11.6506 0.655174 11.4629 0.904884L0.515608 14.5041C0.182242 14.9096 0 15.4183 0 15.9433C0 16.4683 0.182242 16.977 0.515608 17.3826L11.8483 30.9817C12.0756 31.256 12.3645 31.4729 12.6913 31.6146C13.0182 31.7564 13.3738 31.8191 13.7295 31.7977Z" fill="#090F19"/>
                        </svg>
                    </button>
                )}
                <h1 className={headerClasses}>{text}</h1>
                {showBalance && balance !== undefined && (
                    <div
                        className={styles.HomepageBalance}>
                        <h1></h1>
                        <h2>{balance}</h2>
                    </div>
                )}    
            </header>
        </div>
    );
};

export default PageHeader;
