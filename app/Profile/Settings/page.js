import Nav from "@/app/ui/navbar/navbar";
import { SettingButton } from "@/app/ui/Buttons/Buttons";
import styles from "@/app/Profile/styles.module.css";
import { Quicksand } from "next/font/google";
import PageHeader from "@/app/ui/page-headers/page-header";

const quicksand = Quicksand({
    variable: "--font-quicksand",
    subsets: ["latin"],
    display: "swap",
});

export default function Page() {
    return (
        <div className={styles.page}>
            <Nav />
            <div className={styles.header}>
                <PageHeader
                    header='goal_header'
                    text='General Settings'
                    type='header_title'
                />
            </div>
            <div className={styles.content}>
                <h3 className={styles.subheader}>User Settings</h3>
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
                <h3 className={styles.subheader}>App Settings</h3>

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
        </div>
    );
}
