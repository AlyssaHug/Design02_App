"use client";

import { useState } from "react";
import Dropdown from "@/app/ui/dropdown/dropdown";
import styles from "./transactionCard.module.css";

export default function TransactionCard() {
    const [formData, setFormData] = useState({
        category: "",
        amount: "",
        date: "",
        month: "",
        year: "",
        description: "",
        interactionType: "",
    });

    const categoryOptions = [
        { value: "groceries", label: "Groceries" },
        { value: "dineout", label: "Dine Out" },
        { value: "clothing", label: "Clothing" },
        { value: "games", label: "Games" },
        { value: "online_shopping", label: "Online Shopping" },
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

    const dateOptions = Array.from({ length: 31 }, (_, i) => ({
        value: (i + 1).toString(),
        label: (i + 1).toString(),
    }));

    const yearOptions = Array.from({ length: 10 }, (_, i) => ({
        value: (2024 + i).toString(),
        label: (2024 + i).toString(),
    }));

    const interactionOptions = [
        { value: "e-transfer", label: "E-Transfer" },
        { value: "cash", label: "Cash" },
        { value: "cheque", label: "Cheque" },
        { value: "paypal", label: "Paypal" },
        { value: "other", label: "Other" },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleDropdownSelect = (name, option) => {
        setFormData((prev) => ({
            ...prev,
            [name]: option.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Here you would typically send the data to your backend
        console.log("Submitting transaction:", formData);

        try {
            // Example API call
            const response = await fetch("/api/transactions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit transaction");
            }

            // Reset form after successful submission
            setFormData({
                category: "",
                amount: "",
                date: "",
                month: "",
                year: "",
                description: "",
                interactionType: "",
            });

            alert("Transaction submitted successfully!");
        } catch (error) {
            console.error("Error submitting transaction:", error);
            alert("Failed to submit transaction. Please try again.");
        }
    };

    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Add New Transaction</h2>
            <form
                onSubmit={handleSubmit}
                className={styles.form}>
                <div className={styles.formGroup}>
                    <label>Category</label>
                    <Dropdown
                        options={categoryOptions}
                        onSelect={(option) =>
                            handleDropdownSelect("category", option)
                        }
                        placeholder='Select category'
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Amount</label>
                    <input
                        type='number'
                        name='amount'
                        value={formData.amount}
                        onChange={handleInputChange}
                        placeholder='Enter amount'
                        required
                    />
                </div>

                <div className={styles.dateGroup}>
                    <div className={styles.formGroup}>
                        <label>Month</label>
                        <Dropdown
                            options={monthOptions}
                            onSelect={(option) =>
                                handleDropdownSelect("month", option)
                            }
                            placeholder='Select month'
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Date</label>
                        <Dropdown
                            options={dateOptions}
                            onSelect={(option) =>
                                handleDropdownSelect("date", option)
                            }
                            placeholder='Select date'
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Year</label>
                        <Dropdown
                            options={yearOptions}
                            onSelect={(option) =>
                                handleDropdownSelect("year", option)
                            }
                            placeholder='Select year'
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label>Description</label>
                    <input
                        type='text'
                        name='description'
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder='Enter description'
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Payment Method</label>
                    <Dropdown
                        options={interactionOptions}
                        onSelect={(option) =>
                            handleDropdownSelect("interactionType", option)
                        }
                        placeholder='Select payment method'
                    />
                </div>

                <button
                    type='submit'
                    className={styles.submitButton}>
                    Add Transaction
                </button>
            </form>
        </div>
    );
}
