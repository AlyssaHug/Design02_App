import styles from "@/app/Goals/Create/styles.module.css";
import PageHeader from "@/app/ui/page-headers/page-header";
import Nav from "@/app/ui/navbar/navbar";
import TextField from "@/app/ui/TextField/TextField";
import { TextArea } from "@/app/ui/TextField/TextField";
import { Libre_Franklin } from "next/font/google";
import Dropdown from "@/app/ui/dropdown/dropdown";
import Button from "@/app/ui/Buttons/Buttons";

const libreFranklin = Libre_Franklin({
    variable: "--font-libre-franklin",
});

const dateOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
    { value: "13", label: "13" },
    { value: "14", label: "14" },
    { value: "15", label: "15" },
    { value: "16", label: "16" },
    { value: "17", label: "17" },
    { value: "18", label: "18" },
    { value: "19", label: "19" },
    { value: "20", label: "20" },
    { value: "21", label: "21" },
    { value: "22", label: "22" },
    { value: "23", label: "23" },
    { value: "24", label: "24" },
    { value: "25", label: "25" },
    { value: "26", label: "26" },
    { value: "27", label: "27" },
    { value: "28", label: "28" },
    { value: "29", label: "29" },
    { value: "30", label: "30" },
    { value: "31", label: "31" },
];

const monthOptions = [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
];
const yearOptions = [
    { value: "2025", label: "2025" },
    { value: "2026", label: "2026" },
    { value: "2027", label: "2027" },
    { value: "2028", label: "2028" },
    { value: "2029", label: "2029" },
    { value: "2030", label: "2030" },
    { value: "2031", label: "2031" },
    { value: "2032", label: "2032" },
    { value: "2033", label: "2033" },
    { value: "2034", label: "2034" },
    { value: "2035", label: "2035" },
];

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
                <TextField
                    value='How much do you need to save?'
                    placeholder='00.00'
                    type='number'
                />
                <h3 className={styles.subheader}>Achieve by:</h3>
                <div className={styles.dropdowns}>
                    <Dropdown
                        options={dateOptions}
                        className={styles.drop}
                        placeholder='Day'
                    />
                    <Dropdown
                        options={monthOptions}
                        className={styles.drop}
                        placeholder='Month'
                    />
                    <Dropdown
                        options={yearOptions}
                        className={styles.drop}
                        placeholder='Year'
                    />
                </div>
                <div className={styles.calc}>
                    <Button
                        value='Create!'
                        type='primary'
                        href='/Goals'
                    />
                </div>
            </div>
        </div>
    );
}
