import { GoalCow } from "@/app/ui/GoalCards/GoalCards";
import Button from "@/app/ui/Buttons/Buttons";
export default function page() {
    return (
        <div>
            <Button
                color='light'
                value='check out da home'
                href='/'
            />
            <h1>Goal Recommendations</h1>
            <GoalCow
                type='goalCow'
                value='Spend $50 less on games this month!'
                text='+'
                imageSrc='/moomoonormal.svg'
            />
            <GoalCow
                type='goalCow'
                value='Spend $40 less on takeout!'
                text='+'
                imageSrc='/moomoonormal.svg'
            />
            <GoalCow
                type='goalCow'
                value='Spend only $40 on clothes this month!'
                text='+'
                imageSrc='/moomoonormal.svg'
            />
        </div>
    );
}
