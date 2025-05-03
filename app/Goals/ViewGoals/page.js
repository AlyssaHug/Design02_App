import Button from "@/app/ui/Buttons/Buttons";
import { GoalDetailed } from "@/app/ui/GoalCards/GoalCards";
import "./styles.css";

function page() {
    return (
        <div>
            <Button
                color='light'
                value='check out da home'
                href='/'
            />
            <GoalDetailed
                name='Goal 1'
                title='Reduce spending by $60!'
                type='General'
                start='March 26, 2025'
                end='April 27, 2025'
                progress={90}
                goal={100}
            />
        </div>
    );
}

export default page;
