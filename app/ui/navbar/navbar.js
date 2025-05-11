import classNames from "classnames";
import Link from "next/link";
import { Quicksand, Libre_Franklin } from "next/font/google";
import styles from "@/app/ui/navbar/navbar.module.css";
import Button from "@/app/ui/Buttons/Buttons";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

const quicksand = Quicksand({
    variable: "--font-quicksand",
});

export default function Nav({ size, href }) {
    const navClasses = classNames(
        styles.navbar,
        quicksand.variable,
        libreFranklin.variable
    );

    return (
        <div className={styles.wholenav}>
            <div className={navClasses}>
                <Button
                    value='expense'
                    color='nav'
                    imageSrc='/navbar-icons/expense.svg'
                    size='expense'
                    href='/Expense'
                />

                <Button
                    value='goal'
                    color='nav'
                    imageSrc='/navbar-icons/goal.svg'
                    size='goal'
                    href='/Goals'
                />

                <div className={styles.cow}>
                    <Button
                        color='cow'
                        imageSrc='/navbar-icons/cow.svg'
                        href='/Cow'
                    />
                </div>
                <Button
                    value='home'
                    color='nav'
                    imageSrc='/navbar-icons/home-icon.svg'
                    size='home'
                    href='/'
                />
                <Button
                    value='rewards'
                    color='nav'
                    imageSrc='/navbar-icons/rewards.svg'
                    size='rewards'
                    href='/Rewards'
                />
                <Button
                    value='profile'
                    color='nav'
                    imageSrc='/navbar-icons/profile.svg'
                    size='profile'
                />
            </div>
        </div>
    );
}
