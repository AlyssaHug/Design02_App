import classNames from "classnames";
import { Libre_Franklin } from "next/font/google";
import styles from "@/app/ui/page-headers/page-header.module.css";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

const PageHeader = ({ title, subtitle, icon }) => {
    const headerClasses = classNames(styles.header, libreFranklin.variable, {
        [styles.new_user_homepage_header]: type === "new_user_homepage",
        [styles.expense_header]: icon === "expense",
        [styles.your_total_balance]: type === "your_total_balance",
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
