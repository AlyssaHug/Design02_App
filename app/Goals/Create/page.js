import styles from "@/app/Goals/Create/styles.module.css";
import PageHeader from "@/app/ui/page-headers/page-header";
import Nav from "@/app/ui/navbar/navbar";
import TextField from "@/app/ui/TextField/TextField";
import { TextArea } from "@/app/ui/TextField/TextField";

export default function Page() {
    return (
        <div className={styles.page}>
            <Nav />
            <div className={styles.header}>
                <PageHeader
                    header='goal_header'
                    text='Create a Goal!'
                    type='header_title'
                />
            </div>
            <div className={styles.content}>
                <TextField
                    value='Name your goal'
                    placeholder='Type here...'
                />
                <TextArea
                    value='Tell us about your goal'
                    placeholder="Ex. I'm saving for a concert next year..."
                />
            </div>
        </div>
    );
}
