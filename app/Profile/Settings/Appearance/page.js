import Nav from "@/app/ui/navbar/navbar";
import { SettingButton } from "@/app/ui/Buttons/Buttons";
import Button from "@/app/ui/Buttons/Buttons";
import styles from "@/app/Profile/Settings/Appearance/styles.module.css";
import { Libre_Franklin } from "next/font/google";
import SettingSlider from "@/app/ui/Buttons/SettingSlider";
import PageHeader from "@/app/ui/page-headers/page-header";

const quicksand = Libre_Franklin({
    variable: "--font-libre-franklin",
});

export default function Page() {
    return (
        <div>
            <Nav />
            <div className={styles.header}>
                <PageHeader
                    header='goal_header'
                    text='Appearance Settings'
                    type='header_title'
                />
            </div>
            <div className={styles.container}>
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
                <SettingSlider />
                <p className={styles.name}>Zoom</p>
                <SettingSlider />
            </div>
        </div>
    );
}
