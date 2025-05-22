"use client";
import classNames from "classnames";
import Link from "next/link";
import { Quicksand, Libre_Franklin } from "next/font/google";
import styles from "@/app/ui/navbar/navbar.module.css";
import Button from "@/app/ui/Buttons/Buttons";
import { usePathname } from "next/navigation";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
    subsets: ["latin"],
    display: "swap",
});

const quicksand = Quicksand({
    variable: "--font-quicksand",
    subsets: ["latin"],
    display: "swap",
});

export default function Nav({ size, href }) {
    const pathname = usePathname();
    const isActiveRoute = (activeRoutes) => {
        return activeRoutes.some(
            (route) => pathname === route || pathname.startsWith(route + "/")
        );
    };

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
                    isActive={isActiveRoute(["/Expense"])}
                    activeImageSrc='/navbar-active/expense-active.svg'
                />

                <Button
                    value='goal'
                    color='nav'
                    imageSrc='/navbar-icons/goal.svg'
                    size='goal'
                    href='/Goals'
                    isActive={isActiveRoute(["/Goals"])}
                    activeImageSrc='/navbar-active/goal-active.svg'
                />

                <div className={styles.cow}>
                    <Button
                        color='cow'
                        imageSrc='/navbar-icons/cow.svg'
                        href='/Cow'
                        isActive={isActiveRoute(["/Cow"])}
                        activeImageSrc='/navbar-active/cow-active.svg'
                    />
                </div>
                <Button
                    value='home'
                    color='nav'
                    imageSrc='/navbar-icons/home-icon.svg'
                    size='home'
                    href='/Homepage'
                    isActive={isActiveRoute(["/Homepage"])}
                    activeImageSrc='/navbar-active/home-active.svg'
                />
                <Button
                    value='rewards'
                    color='nav'
                    imageSrc='/navbar-icons/rewards.svg'
                    size='rewards'
                    href='/Rewards'
                    isActive={isActiveRoute(["/Rewards"])}
                    activeImageSrc='/navbar-active/rewards-active.svg'
                />
                <Button
                    value='profile'
                    color='nav'
                    imageSrc='/navbar-icons/profile.svg'
                    size='profile'
                    href='/Profile'
                    isActive={isActiveRoute(["/Profile"])}
                    activeImageSrc='/navbar-active/profile-active.svg'
                />
            </div>
        </div>
    );
}
