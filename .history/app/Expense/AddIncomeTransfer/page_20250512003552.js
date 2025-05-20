"use client";

import Nav from "@/app/ui/navbar/navbar";
import Dropdown from "@/app/ui/dropdown/dropdown";
import Button from "@/app/ui/Buttons/Buttons";

export default function Page() {
    const interactionOptions = [
        { value: "e-transfer", label: "E-Transfer" },
        { value: "cash", label: "Cash" },
        { value: "cheque", label: "Cheque" },
        { value: "paypal", label: "Paypal" },
        { value: "other", label: "Other" },
    ];
    return (
        <>
            <Dropdown options={interactionOptions} />
            <Button
                color='light-blue'
                value='Cancel'
                size='small'
                href='/Expense/overview/MonthlyView'
            />
            <Nav />
        </>
    );
}
