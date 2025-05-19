import Nav from "@/app/ui/navbar/navbar";
import { SettingButton } from "@/app/ui/Buttons/Buttons";
import styles from "@/app/Profile/styles.module.css";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
    variable: "--font-quicksand",
});

export default function Page() {
    return (
        <div className={styles.content}>
            <Nav />
            <h3 className={styles.header}>User Settings</h3>
            <SettingButton
                value='Change password'
                imageSrc='/right_arrow.svg'
                type='settings'
            />
            <SettingButton
                value='Security Settings'
                imageSrc='/right_arrow.svg'
                type='settings'
            />
            <div className={styles.divider}></div>
            <h3 className={styles.header}>App Settings</h3>

            <SettingButton
                value='Appearance'
                imageSrc='/right_arrow.svg'
                type='settings'
                href='/Profile/Settings/Appearance'
            />
            <SettingButton
                value='Accessibility'
                imageSrc='/right_arrow.svg'
                type='settings'
                href='/Profile/Settings/Accessibility'
            />
            <SettingButton
                value='Notifications'
                imageSrc='/right_arrow.svg'
                type='settings'
            />
            <SettingButton
                value='Language'
                imageSrc='/right_arrow.svg'
                type='settings'
            />
            <div className={styles.divider}></div>
            <SettingButton
                value='Sign out'
                imageSrc='/right_arrow.svg'
                type='settings'
            />
        </div>
    );
}
