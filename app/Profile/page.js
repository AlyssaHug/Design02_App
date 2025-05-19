import Nav from "@/app/ui/navbar/navbar";
import { SettingButton } from "@/app/ui/Buttons/Buttons";
import styles from "@/app/Profile/styles.module.css";
import TextField from "../ui/TextField/TextField";
import Button from "@/app/ui/Buttons/Buttons";

export default function Page() {
    return (
        <div className={styles.page}>
            <Nav />

            <div className={styles.bg}>
                <div className={styles.icon}></div>
            </div>
            <div className={styles.content}>
                <div className={styles.text}>
                    <TextField
                        placeholder='First Name'
                        value='First Name'
                    />
                    <TextField
                        placeholder='Last Name'
                        value='Last Name'
                    />
                    <TextField
                        placeholder='JohnDoe@gmail.com'
                        value='Email'
                        type='email'
                    />
                    <TextField value='Phone Number' />
                </div>
                <div className={styles.divider}></div>
                <div className={styles.buttons}>
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
            </div>
        </div>
    );
}
