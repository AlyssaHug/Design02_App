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
            />
        </div>
    );
}
export default page;
