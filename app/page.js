import ToggleButton from "@/app/ui/Buttons/ToggleButton";
import ProgressBar from "./ui/ProgressBar/ProgressBar";
import GoalProgress from "./ui/GoalCards/GoalCards";
import { Goals } from "./ui/GoalCards/GoalCards";
import { GoalRecs } from "./ui/GoalCards/GoalCards";

function page() {
    return (
        <div>
            <ToggleButton />
            <GoalProgress value='Goal Progress' />
            <Goals
                value='Goals'
                type='goals'
                desc='Reduce spending by $60!'
                imageSrc='/right_arrow.svg'
            />
            <GoalRecs
                value='Recommendations'
                desc='Spend $50 less on games!'
                desc2='Spend $40 less on takeout!'
            />
        </div>
    );
}
export default page;
