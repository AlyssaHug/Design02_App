"use client";
import Button from "@/app/ui/Buttons/Buttons";
import TransactionCard from "@/app/ui/TransactionCards/transactionCard";
import Nav from "@/app/ui/navbar/navbar";

export default function Page() {
    return (
        <>
            <div className={styles.buttonContainer}>
                <Button
                    size='caption'
                    value='income overview'
                    style='round'
                    color='light-blue'
                />
                <Button
                    size='caption'
                    value='view history'
                    style='round'
                    color='light-blue'
                />
                <Button
                    size='caption'
                    value='calendar'
                    style='round'
                    color='light-blue'
                />
            </div>
            <Nav />
        </>
    );
}
