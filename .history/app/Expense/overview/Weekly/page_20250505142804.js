import { useState } from "react";
import TransactionCard from "@/app/ui/TransactionCard/transactionCard";

export default function WeeklyOverview() {
    const [isMonthly, setIsMonthly] = useState(true);

    return (
        <div>
            