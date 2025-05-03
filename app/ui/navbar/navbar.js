import classNames from "classnames";
import { Quicksand, Libre_Franklin } from "next/font/google";
import styles from "@/app/ui/navbar/navbar.module.css";
import Button from "@/app/ui/Buttons/Buttons";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

const quicksand = Quicksand({
    variable: "--font-quicksand",
});

export default function Nav({ size }) {
    const navClasses = classNames(
        styles.navbar,
        quicksand.variable,
        libreFranklin.variable
    );

    return (
        <div>
            <div className={navClasses}>
                <Button
                    value="expense"
                    color="nav"
                    imageSrc="/navbar-icons/expense.svg"
                    size="expense"
                />
                <Button
                    value="goal"
                    color="nav"
                    imageSrc="/navbar-icons/goal.svg"
                    size="goal"
                />

                <div className={styles.cow}>
                    <Button
                        color="cow"
                        imageSrc="/navbar-icons/cow.svg"
                    />
                </div>
                <Button
                    value="home"
                    color="nav"
                    imageSrc="/navbar-icons/home-icon.svg"
                    size="home"
                />
                <Button
                    value="rewards"
                    color="nav"
                    imageSrc="/navbar-icons/rewards.svg"
                    size="rewards"
                />
                <Button
                    value="profile"
                    color="nav"
                    imageSrc="/navbar-icons/profile.svg"
                    size="profile"
                />
            </div>
        </div>
    );
}
