import ToggleButton from "@/app/ui/Buttons/ToggleButton";
import ProgressBar from "./ui/ProgressBar/ProgressBar";
import GoalProgress from "./ui/GoalCards/GoalCards";
import { GoalRecs } from "./ui/GoalCards/GoalCards";

function page() {
    return (
        <div>
            <ToggleButton />
            <GoalProgress value='Goal Progress' />
            <GoalRecs
                value='Goals'
                type='recs'
                desc='Reduce spending by $60!'
                imageSrc='/right_arrow.svg'
            />
        </div>
    );
}
export default page;
