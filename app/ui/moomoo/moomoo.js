import classNames from "classnames";
import styles from "@/app/ui/moomoo/moomoo.module.css";

export default function Moomoo({ size, type, value, src }) {
    const moomooClasses = classNames(styles.moomoo, {
        [styles.interaction]: size === "interaction",
        [styles.shop]: size === "shop",
        [styles.dressup]: size === "dressup",
        [styles.goals]: size === "goals",
        [styles.recommendationsgoals]: size === "recommendationsgoals",
    });
    return (
        <img
            className={moomooClasses}
            src={src}
            alt={value}
        />
    );
}
