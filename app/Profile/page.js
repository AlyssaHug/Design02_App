import Nav from "@/app/ui/navbar/navbar";
import { SettingButton } from "@/app/ui/Buttons/Buttons";
import styles from "@/app/Profile/styles.module.css";
export default function Page() {
    return (
        <div className={styles.content}>
            <Nav />
            <h1>Hi there user!</h1>
            <div className={styles.divider}></div>
            <SettingButton
                value='Settings'
                imageSrc='right_arrow.svg'
                type='settings'
                href='/Profile/Settings'
            />
            <SettingButton
                value='Linked Accounts'
                imageSrc='right_arrow.svg'
                type='settings'
            />
        </div>
    );
}
