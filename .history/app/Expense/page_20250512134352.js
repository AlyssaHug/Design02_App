"use client";

import Nav from "@/app/ui/navbar/navbar";
import Button from "@/app/ui/Buttons/Buttons";
export default function Expense() {
    return (
        <>
            <Button
                type='expense'
                value='Overview'
                href='/Expense/overview'
            />
            <Button
                type='expense'
                value='Add Income Transfer'
                href='/Expense/AddIncomeTransfer'
            />
            <Button
                type='expense'
                value='Add Expenses'
                href='/Expense/AddExpenses'
            />
            <Button
                type='expense'
                value='View Expenses'
                href='/Expense/overview/MonthlyView'
            />
            <Nav />
        </>
    );
}
