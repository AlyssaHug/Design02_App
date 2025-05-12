"use client";
import Nav from "./ui/navbar/navbar";
import GoalProgress from "./ui/GoalCards/GoalCards";
import Button from "./ui/Buttons/Buttons";
import TextField from "./ui/TextField/TextField";
export default function Page() {
    return (
        <div>
            <Nav />
            <Button
                color='light'
                value='da shop'
                href='/Cow/Shop'
            />
            <Button
                value='Settings'
                imageSrc='/right_arrow.svg'
            />
            <GoalProgress />
        </div>
    );
}
