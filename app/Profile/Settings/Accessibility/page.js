import Nav from "@/app/ui/navbar/navbar";
import Slider from "@/app/ui/Buttons/Slider";
import styles from "@/app/Profile/Settings/Accessibility/styles.module.css";
import { Libre_Franklin } from "next/font/google";

const quicksand = Libre_Franklin({
    variable: "--font-libre-franklin",
});

export default function Page() {
    return (
        <div className={styles.container}>
            <Nav />
            <div className={styles.item}>
                <p className={styles.name}>Saturation</p>
            </div>
            <div className={styles.item}>
                <p className={styles.name}>Text-to-Speech</p>
            </div>
            <div className={styles.item}>
                <p className={styles.name}>Text-to-Speech Speed</p>
            </div>
            <div className={styles.item}>
                <p className={styles.name}>Voice Control</p>
            </div>
            <Slider />
        </div>
    );
}
