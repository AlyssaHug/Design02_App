import Nav from "@/app/ui/navbar/navbar";
import Slider from "@/app/ui/Buttons/Slider";
import Button from "@/app/ui/Buttons/Buttons";
import styles from "@/app/Profile/Settings/Accessibility/styles.module.css";
import { Libre_Franklin } from "next/font/google";
import SettingSlider from "@/app/ui/Buttons/SettingSlider";

const quicksand = Libre_Franklin({
    variable: "--font-libre-franklin",
});

export default function Page() {
    return (
        <div className={styles.container}>
            <Nav />
            <div className={styles.itemStack}>
                <p className={styles.name}>Saturation</p>
                <SettingSlider />
            </div>
            <div className={styles.item}>
                <p className={styles.name}>Text-to-Speech</p>
                <Slider />
            </div>
            <div className={styles.itemStack}>
                <p className={styles.name}>Text-to-Speech Speed</p>
                <div className={styles.leftButton}>
                    <Button
                        value='Preview'
                        color='light-blue'
                    />
                </div>
                <SettingSlider />
            </div>
            <div className={styles.item}>
                <p className={styles.name}>Voice Control</p>
                <Slider />
            </div>
        </div>
    );
}
