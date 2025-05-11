import classNames from "classnames";
import { Libre_Franklin } from "next/font/google";
import styles from "@/app/ui/page-headers/page-header.module.css";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

const PageHeader = ({ title, subtitle, icon }) => {
    const headerClasses = classNames(styles.header, libreFranklin.variable, {
        [styles.new_user_homepage_header]: icon,
    });

    return (
        <header className={headerClasses}>
            <h1 className={styles.header_title}>{title}</h1>
        </header>
    );
}

export default PageHeader;
