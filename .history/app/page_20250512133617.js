"use client";
import Nav from "./ui/navbar/navbar";
import GoalProgress from "./ui/GoalCards/GoalCards";
import Button from "./ui/Buttons/Buttons";
export default function Page() {
    return (
        <div className={styles.container}>
            <Nav />
            <Button
                color='light'
                value='da shop'
                href='/Cow/Shop'
            />
            <GoalProgress />
        </div>
    );
}
