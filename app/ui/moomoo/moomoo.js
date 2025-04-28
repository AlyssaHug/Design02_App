import classNames from "classnames";
import styles from "@/app/ui/moomoo/moomoo.module.css";

export default function moomoo({ onClick }) {
    const moomooClasses = classNames(styles.moomoo, {
        [styles.normalMoo]: onClick === ""
    });
}
