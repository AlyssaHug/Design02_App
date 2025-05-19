import Nav from "@/app/ui/navbar/navbar";
import { SettingButton } from "@/app/ui/Buttons/Buttons";
import styles from "@/app/Profile/styles.module.css";
import TextField from "../ui/TextField/TextField";
export default function Page() {
    return (
        <div className={styles.content}>
            <Nav />
            <h1>Hi there user!</h1>
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
                />
                <TextField value='Phone Number' />
            </div>
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
