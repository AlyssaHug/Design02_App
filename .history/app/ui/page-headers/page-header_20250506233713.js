import classNames from "classnames";
import { Libre_Franklin } from "next/font/google";
import styles from "@/app/ui/page-headers/page-header.module.css";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

const PageHeader = ({ title, subtitle}) => {
    const headerClasses = classNames(styles.header, libreFranklin.variable, {
    });

    return (
        <div>
            <header className={styles.new_user_homepage_header}>
                <h1 className={styles.header_title}>{title}</h1>
            </header>
            <header></header>
        </div>
    );
}

export default PageHeader;
