import classNames from "classnames";
import { Libre_Franklin } from "next/font/google";
import styles from "@/app/ui/page-headers/page-header.module.css";
import Button from "@/app/ui/Buttons/Buttons";
import { useRouter } from "next/navigation";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});
const router = useRouter();
const backToOverview = () => {
    router.replace("/Expense/overview");
};

const PageHeader = ({ type, header, text, subtext }) => {
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
        [styles.transactions_this_month_header]:
            header === "transactions_this_month_header",
        [styles.history_subtitle]: header === "history_subtitle",
    });

    return (
        <div>
            <header className={headerClasses}>
                <div className={styles.backButton}>
                    <Button
                        imageSrc='/left_arrow.svg'
                        onClick={backToOverview}
                    />
                </div>
                <h1 className={headerClasses}>{text}</h1>
                {subtext && <p className={styles.subtext}>{subtext}</p>}
            </header>
        </div>
    );
};

export default PageHeader;
