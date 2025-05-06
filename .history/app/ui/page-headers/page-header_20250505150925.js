import classNames from "classnames";
import { Libre_Franklin } from "next/font/google";
import styles from "@/app/ui/page-headers/page-header.module.css";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

const PageHeader = ({ title, subtitle, icon }) => {
    const headerClasses = classNames(styles.header, libreFranklin.variable, {
        [styles.withIcon]: icon,
    });

    return (
        <div className={headerClasses}>
            {icon && <img src={icon} alt="Icon" className={styles.icon} />}
            <h1 className={styles.title}>{title}</h1>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
    );
}