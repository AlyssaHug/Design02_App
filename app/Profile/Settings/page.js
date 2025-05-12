import Nav from "@/app/ui/navbar/navbar";
import { SettingButton } from "@/app/ui/Buttons/Buttons";
import styles from "@/app/Profile/styles.module.css";
export default function Page() {
    return (
        <div>
            <Nav />

            <div className={styles.divider}></div>
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
        </div>
    );
}
