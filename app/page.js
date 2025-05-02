"use client";

import Nav from "@/app/ui/Buttons/Buttons";
function page() {
    return (
        <div>
            <div className="nav">
                <Nav
                    color="nav"
                    size="expense"
                    imageSrc="/navbar-icons/expense.svg"
                    value="Expenses"
                    text="belowtext"
                    font="font"
                />
                <Nav
                    color="nav"
                    size="goals"
                    imageSrc="/navbar-icons/goal.svg"
                    value="Goals"
                    text="belowtext"
                    font="font"
                />
                <Nav
                    className="home"
                    color="nav"
                    size="home"
                    imageSrc="/navbar-icons/home-icon.svg"
                    value="home"
                    text="belowtext"
                    font="font"
                />
                <Nav
                    color="nav"
                    size="goals"
                    imageSrc="/navbar-icons/goal.svg"
                    value="Goals"
                    text="belowtext"
                    font="font"
                />
                <Nav
                    color="nav"
                    size="goals"
                    imageSrc="/navbar-icons/goal.svg"
                    value="Goals"
                    text="belowtext"
                    font="font"
                />
            </div>
        </div>
    );
}

export default page;
