import Nav from "@/app/ui/navbar/navbar";
import { SettingButton } from "@/app/ui/Buttons/Buttons";
import Button from "@/app/ui/Buttons/Buttons";
import styles from "@/app/Profile/Settings/Appearance/styles.module.css";
import { Libre_Franklin } from "next/font/google";

const quicksand = Libre_Franklin({
    variable: "--font-libre-franklin",
});

export default function Page() {
    return (
        <div className={styles.container}>
            <Nav />
            <div className={styles.lightMode}>
                <p className={styles.name}>Theme</p>
                <Button
                    value='Light'
                    type='primary'
                />
                <Button
                    value='Dark'
                    type='secondary'
                />
            </div>
            <p className={styles.name}>Text Size</p>
            <p className={styles.name}>Zoom</p>
        </div>
    );
}
